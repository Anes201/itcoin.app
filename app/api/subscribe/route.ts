import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

// Simple email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Simple in-memory rate limiter (for production, use Redis or similar)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3; // max 3 requests per minute per IP

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const requests = rateLimitMap.get(ip) || [];
  
  // Remove old requests outside the window
  const recentRequests = requests.filter(time => now - time < RATE_LIMIT_WINDOW);
  
  if (recentRequests.length >= MAX_REQUESTS) {
    return false;
  }
  
  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);
  return true;
}

export async function POST(request: Request) {
  try {
    // Get IP address for rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const { email } = await request.json();

    // Validate email format
    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Sanitize email
    const sanitizedEmail = email.trim().toLowerCase();

    const client = await clientPromise;
    const db = client.db('itcoin');
    const collection = db.collection('email_alerts');

    // Check if email already exists
    const existingEmail = await collection.findOne({ email: sanitizedEmail });
    
    if (existingEmail) {
      return NextResponse.json(
        { message: 'Email already registered for alerts' },
        { status: 200 }
      );
    }

    // Insert new email
    await collection.insertOne({
      email: sanitizedEmail,
      subscribedAt: new Date(),
      active: true,
      ip, // Store IP for audit purposes
    });

    return NextResponse.json(
      { message: 'Successfully subscribed to price alerts!' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error subscribing to alerts:', error);
    
    // Check if it's a MongoDB connection error
    if (error instanceof Error && error.message.includes('connect')) {
      return NextResponse.json(
        { error: 'Database connection failed. Please try again later.' },
        { status: 503 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again later.' },
      { status: 500 }
    );
  }
}

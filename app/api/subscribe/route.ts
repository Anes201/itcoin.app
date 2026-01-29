import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('itcoin');
    const collection = db.collection('email_alerts');

    // Check if email already exists
    const existingEmail = await collection.findOne({ email });
    
    if (existingEmail) {
      return NextResponse.json(
        { message: 'Email already registered for alerts' },
        { status: 200 }
      );
    }

    // Insert new email
    await collection.insertOne({
      email,
      subscribedAt: new Date(),
      active: true,
    });

    return NextResponse.json(
      { message: 'Successfully subscribed to price alerts!' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error subscribing to alerts:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again later.' },
      { status: 500 }
    );
  }
}

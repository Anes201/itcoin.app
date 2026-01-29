import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('itcoin');
    const collection = db.collection('subscribers');

    // Check if user already exists
    const existing = await collection.findOne({ email });
    if (existing) {
      return NextResponse.json({ message: 'Already subscribed' }, { status: 200 });
    }

    await collection.insertOne({
      email,
      subscribedAt: new Date(),
      active: true
    });

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

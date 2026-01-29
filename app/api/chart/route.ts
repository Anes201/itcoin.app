import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Allowed values for days parameter
const ALLOWED_DAYS = ['1', '7', '30', '90', '365', 'max'];

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const daysParam = searchParams.get('days') || '7';

    // Validate days parameter
    if (!ALLOWED_DAYS.includes(daysParam)) {
      return NextResponse.json(
        { error: `Invalid days parameter. Allowed values: ${ALLOWED_DAYS.join(', ')}` },
        { status: 400 }
      );
    }

    // TODO: Replace 'bitcoin' with 'itcoin' when ItCoin is listed on CoinGecko
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${daysParam}`,
      {
        next: { revalidate: 300 }, // Cache for 5 minutes
      }
    );

    if (!response.ok) {
      const statusCode = response.status;
      console.error(`CoinGecko API error: ${statusCode}`);
      
      if (statusCode === 429) {
        return NextResponse.json(
          { error: 'Rate limit exceeded. Please try again later.' },
          { status: 429 }
        );
      }
      
      throw new Error(`Failed to fetch chart data: ${statusCode}`);
    }

    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching chart data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch chart data' },
      { status: 500 }
    );
  }
}

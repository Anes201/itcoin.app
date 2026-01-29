import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    // TODO: Replace 'bitcoin' with 'itcoin' when ItCoin is listed on CoinGecko
    const response = await fetch(
      'https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&community_data=false&developer_data=false',
      {
        next: { revalidate: 600 }, // Cache for 10 minutes
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch coin info');
    }

    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching coin info:', error);
    return NextResponse.json(
      { error: 'Failed to fetch coin info' },
      { status: 500 }
    );
  }
}

import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Attempting to fetch ITCOIN from CoinGecko. 
    // Note: If 'itcoin' is not a valid cg-id yet, we use Bitcoin as a high-conversion demo placeholder 
    // or you can replace this with your actual contract address lookups.
    const response = await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true',
      { 
        next: { revalidate: 60 },
        headers: {
          'accept': 'application/json'
        }
      }
    );

    if (!response.ok) {
      throw new Error(`CoinGecko API error: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Price fetch error:', error);
    return NextResponse.json({ error: 'Failed to fetch price' }, { status: 500 });
  }
}

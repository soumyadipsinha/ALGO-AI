import { NextRequest, NextResponse } from 'next/server';

// Mock stock price API endpoint
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const symbol = searchParams.get('symbol');

  if (!symbol) {
    return NextResponse.json(
      { error: 'Symbol parameter is required' },
      { status: 400 }
    );
  }

  // Mock price data - replace with actual Finnhub API call
  const mockData = {
    symbol: symbol,
    price: 150.25 + Math.random() * 50,
    change: (Math.random() - 0.5) * 10,
    changePercent: (Math.random() - 0.5) * 5,
    high: 155.0,
    low: 145.0,
    open: 148.0,
    previousClose: 147.5,
    timestamp: Date.now(),
  };

  return NextResponse.json(mockData);
}

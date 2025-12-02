import { NextRequest, NextResponse } from 'next/server';

// Mock watchlist API endpoints
export async function GET(request: NextRequest) {
  // Mock watchlist data - replace with actual database query
  const mockWatchlist = [
    { id: '1', symbol: 'AAPL', userId: '1', createdAt: new Date().toISOString() },
    { id: '2', symbol: 'MSFT', userId: '1', createdAt: new Date().toISOString() },
    { id: '3', symbol: 'GOOGL', userId: '1', createdAt: new Date().toISOString() },
  ];

  return NextResponse.json(mockWatchlist);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { symbol } = body;

    if (!symbol) {
      return NextResponse.json(
        { error: 'Symbol is required' },
        { status: 400 }
      );
    }

    // Mock adding to watchlist - replace with actual database operation
    const newWatchlistItem = {
      id: Date.now().toString(),
      symbol,
      userId: '1',
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json(newWatchlistItem, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to add to watchlist' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const symbol = searchParams.get('symbol');

    if (!symbol) {
      return NextResponse.json(
        { error: 'Symbol is required' },
        { status: 400 }
      );
    }

    // Mock deletion - replace with actual database operation
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to remove from watchlist' },
      { status: 500 }
    );
  }
}

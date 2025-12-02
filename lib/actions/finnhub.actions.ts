'use server';

import { StockWithWatchlistStatus } from "../types";
import { DEFAULT_STOCKS } from "../constants";

// This is a placeholder for Finnhub API integration
// You'll need to add your Finnhub API key and implement actual API calls

const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY || '';
const FINNHUB_BASE_URL = 'https://finnhub.io/api/v1';

export async function searchStocks(query?: string): Promise<StockWithWatchlistStatus[]> {
  try {
    if (!query || query.trim() === '') {
      // Return default stocks with watchlist status
      return DEFAULT_STOCKS.map(stock => ({
        ...stock,
        inWatchlist: false,
      }));
    }

    // If API key is configured, make actual API call
    if (FINNHUB_API_KEY) {
      const response = await fetch(
        `${FINNHUB_BASE_URL}/search?q=${encodeURIComponent(query)}&token=${FINNHUB_API_KEY}`,
        { cache: 'no-store' }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch stocks');
      }

      const data = await response.json();
      
      return data.result?.map((stock: any) => ({
        symbol: stock.symbol,
        description: stock.description,
        displaySymbol: stock.displaySymbol,
        type: stock.type,
        inWatchlist: false,
      })) || [];
    }

    // Fallback: filter default stocks by query
    return DEFAULT_STOCKS
      .filter(stock => 
        stock.symbol.toLowerCase().includes(query.toLowerCase()) ||
        stock.description.toLowerCase().includes(query.toLowerCase())
      )
      .map(stock => ({
        ...stock,
        inWatchlist: false,
      }));

  } catch (error) {
    console.error('Error searching stocks:', error);
    return DEFAULT_STOCKS.map(stock => ({
      ...stock,
      inWatchlist: false,
    }));
  }
}

export async function getStockQuote(symbol: string) {
  try {
    if (!FINNHUB_API_KEY) {
      // Return mock data if no API key
      return {
        c: 150.00,
        d: 2.50,
        dp: 1.69,
        h: 152.00,
        l: 148.50,
        o: 149.00,
        pc: 147.50,
        t: Date.now(),
      };
    }

    const response = await fetch(
      `${FINNHUB_BASE_URL}/quote?symbol=${symbol}&token=${FINNHUB_API_KEY}`,
      { cache: 'no-store' }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch stock quote');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching stock quote:', error);
    return null;
  }
}

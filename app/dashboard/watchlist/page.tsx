'use client';

import { useState } from 'react';
import { Bookmark, TrendingUp, TrendingDown, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WatchlistPage() {
  const [watchlist] = useState([
    { symbol: 'AAPL', name: 'Apple Inc.', price: 178.25, change: 2.35, changePercent: 1.34 },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: 378.90, change: -1.20, changePercent: -0.32 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 142.50, change: 3.75, changePercent: 2.71 },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 152.80, change: 5.40, changePercent: 3.66 },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: 242.50, change: 12.30, changePercent: 5.34 },
    { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 485.20, change: 17.80, changePercent: 3.81 },
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">My Watchlist</h1>
          <p className="text-gray-400">Track your favorite stocks in real-time</p>
        </div>
        <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold">
          <Plus className="h-5 w-5 mr-2" />
          Add Stock
        </Button>
      </div>

      {watchlist.length === 0 ? (
        <div className="text-center py-16">
          <Bookmark className="h-16 w-16 text-gray-700 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-400 mb-2">Your watchlist is empty</h3>
          <p className="text-gray-500 mb-6">Start tracking stocks to see them here</p>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold">
            <Plus className="h-5 w-5 mr-2" />
            Add Your First Stock
          </Button>
        </div>
      ) : (
        <div className="grid gap-4">
          {watchlist.map((stock) => (
            <div
              key={stock.symbol}
              className="p-6 rounded-xl border border-gray-800 bg-gray-900/50 hover:bg-gray-900 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-lg">
                    <span className="text-xl font-bold text-yellow-500">
                      {stock.symbol.slice(0, 2)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">{stock.symbol}</h3>
                    <p className="text-sm text-gray-400">{stock.name}</p>
                  </div>
                </div>

                <div className="flex items-center gap-8">
                  <div className="text-right">
                    <p className="text-2xl font-bold text-white">${stock.price.toFixed(2)}</p>
                    <div className="flex items-center gap-1 justify-end">
                      {stock.change >= 0 ? (
                        <>
                          <TrendingUp className="h-4 w-4 text-green-500" />
                          <span className="text-green-500 font-medium">
                            +${stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
                          </span>
                        </>
                      ) : (
                        <>
                          <TrendingDown className="h-4 w-4 text-red-500" />
                          <span className="text-red-500 font-medium">
                            ${stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-red-500 hover:bg-red-500/10"
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

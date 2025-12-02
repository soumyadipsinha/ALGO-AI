export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">Welcome to your trading dashboard</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Portfolio Value</h3>
            <div className="text-2xl">📈</div>
          </div>
          <p className="text-3xl font-bold text-white mb-2">$125,430</p>
          <p className="text-sm text-green-500">+5.2% this month</p>
        </div>

        <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Watchlist Items</h3>
            <div className="text-2xl">⭐</div>
          </div>
          <p className="text-3xl font-bold text-white mb-2">12</p>
          <p className="text-sm text-gray-400">Stocks tracked</p>
        </div>

        <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">AI Signals</h3>
            <div className="text-2xl">🤖</div>
          </div>
          <p className="text-3xl font-bold text-white mb-2">8</p>
          <p className="text-sm text-yellow-500">Active recommendations</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/50">
          <h3 className="text-xl font-semibold text-white mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-gray-800 last:border-0">
                <div>
                  <p className="text-white font-medium">AAPL</p>
                  <p className="text-sm text-gray-500">Added to watchlist</p>
                </div>
                <p className="text-sm text-gray-400">2h ago</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/50">
          <h3 className="text-xl font-semibold text-white mb-4">Top Movers</h3>
          <div className="space-y-3">
            {[
              { symbol: 'TSLA', change: '+5.2%', price: '$242.50' },
              { symbol: 'NVDA', change: '+3.8%', price: '$485.20' },
              { symbol: 'MSFT', change: '+2.1%', price: '$378.90' },
            ].map((stock) => (
              <div key={stock.symbol} className="flex items-center justify-between py-2 border-b border-gray-800 last:border-0">
                <div>
                  <p className="text-white font-medium">{stock.symbol}</p>
                  <p className="text-sm text-green-500">{stock.change}</p>
                </div>
                <p className="text-white">{stock.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

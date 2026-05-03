import { TrendingDown, TrendingUp } from 'lucide-react';

export function HomeScreen() {
  return (
    <div className="p-4 space-y-6">
      <div className="flex justify-between items-center">
        <h1>Overview</h1>
      </div>

      <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-6 text-white">
        <div className="text-sm opacity-90 mb-1">Net Worth</div>
        <div className="text-3xl mb-4">$24,582.40</div>
        <div className="flex items-center gap-2 text-sm">
          <TrendingUp size={16} />
          <span>+12.4% this month</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <div className="text-sm text-gray-500 mb-1">Income</div>
          <div className="text-xl">$5,240</div>
          <div className="text-xs text-green-600 flex items-center gap-1 mt-2">
            <TrendingUp size={12} />
            <span>+8.2%</span>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <div className="text-sm text-gray-500 mb-1">Expenses</div>
          <div className="text-xl">$3,128</div>
          <div className="text-xs text-red-600 flex items-center gap-1 mt-2">
            <TrendingDown size={12} />
            <span>-4.1%</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h3>Recent Transactions</h3>
        </div>
        <div className="space-y-3">
          {[
            { name: 'Spotify', amount: -9.99, date: 'Today', category: 'Entertainment' },
            { name: 'Whole Foods', amount: -82.45, date: 'Yesterday', category: 'Groceries' },
            { name: 'Salary Deposit', amount: 5240.0, date: 'May 1', category: 'Income' },
            { name: 'Netflix', amount: -15.99, date: 'Apr 30', category: 'Entertainment' },
          ].map((tx, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  tx.amount > 0 ? 'bg-green-100' : 'bg-gray-100'
                }`}>
                  <span className="text-lg">{tx.amount > 0 ? '↓' : '↑'}</span>
                </div>
                <div>
                  <div className="text-sm">{tx.name}</div>
                  <div className="text-xs text-gray-500">{tx.date}</div>
                </div>
              </div>
              <div className={`${tx.amount > 0 ? 'text-green-600' : 'text-foreground'}`}>
                {tx.amount > 0 ? '+' : ''}${Math.abs(tx.amount).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

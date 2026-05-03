import {
  AlertTriangle,
  CheckCircle2,
  PieChart,
  TrendingDown,
  Wallet,
} from 'lucide-react';

export function BillsScreen() {
  const subscriptions = [
    { name: 'Netflix', amount: 15.99, status: 'Inactive', category: 'Streaming' },
    { name: 'Spotify', amount: 9.99, status: 'Active', category: 'Music' },
    { name: 'ChatGPT Plus', amount: 20.0, status: 'Active', category: 'Productivity' },
    { name: 'Adobe Creative', amount: 54.99, status: 'Active', category: 'Work' },
    { name: 'iCloud Storage', amount: 2.99, status: 'Active', category: 'Storage' },
    { name: 'YouTube Premium', amount: 13.99, status: 'Inactive', category: 'Streaming' },
  ];

  const monthlyTotal = subscriptions.reduce((sum, sub) => sum + sub.amount, 0);
  const inactive = subscriptions.filter((sub) => sub.status === 'Inactive');
  const potentialSavings = inactive.reduce((sum, sub) => sum + sub.amount, 0);
  const yearlySavings = potentialSavings * 12;

  const categoryTotals = subscriptions.reduce<Record<string, number>>(
    (acc, sub) => {
      acc[sub.category] = (acc[sub.category] || 0) + sub.amount;
      return acc;
    },
    {}
  );

  return (
    <div className="p-4 space-y-6 bg-gray-50 min-h-screen">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-blue-700 bg-clip-text text-transparent">
          Stats
        </h1>
        <div className="text-sm text-gray-500 mt-1">
          Your subscription overview
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-900 to-blue-700 rounded-2xl p-6 text-white">
        <div className="text-sm opacity-90 mb-1">Monthly spending</div>
        <div className="text-3xl">€{monthlyTotal.toFixed(2)}</div>
        <div className="flex items-center gap-2 text-sm opacity-90 mt-2">
          <Wallet size={16} />
          <span>Across {subscriptions.length} subscriptions</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-3">
            <TrendingDown size={18} className="text-blue-700" />
          </div>
          <div className="text-sm text-gray-500">Could save</div>
          <div className="text-xl">€{potentialSavings.toFixed(2)}</div>
          <div className="text-xs text-gray-500">per month</div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mb-3">
            <AlertTriangle size={18} className="text-red-600" />
          </div>
          <div className="text-sm text-gray-500">Inactive</div>
          <div className="text-xl">{inactive.length}</div>
          <div className="text-xs text-gray-500">need review</div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-3">
            <Wallet size={18} className="text-blue-700" />
          </div>
          <div className="text-sm text-gray-500">Yearly cost</div>
          <div className="text-xl">€{(monthlyTotal * 12).toFixed(0)}</div>
          <div className="text-xs text-gray-500">if unchanged</div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-3">
            <CheckCircle2 size={18} className="text-blue-700" />
          </div>
          <div className="text-sm text-gray-500">Yearly saving</div>
          <div className="text-xl">€{yearlySavings.toFixed(0)}</div>
          <div className="text-xs text-gray-500">possible</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-gray-200">
        <div className="flex items-center gap-2 mb-4">
          <PieChart size={18} className="text-blue-700" />
          <h3>Spending by category</h3>
        </div>

        <div className="space-y-4">
          {Object.entries(categoryTotals).map(([category, amount]) => {
            const percentage = (amount / monthlyTotal) * 100;

            return (
              <div key={category}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{category}</span>
                  <span>€{amount.toFixed(2)}</span>
                </div>

                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-br from-slate-900 to-blue-700 rounded-full"
                    style={{ width: `${percentage}%` }}
                  />
                </div>

                <div className="text-xs text-gray-500 mt-1">
                  {percentage.toFixed(0)}% of monthly spending
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
        <h3 className="mb-2 text-blue-900">Recommended action</h3>
        <div className="text-sm text-blue-800">
          Review Netflix and YouTube Premium first. They are inactive and could
          save you €{potentialSavings.toFixed(2)} every month.
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-gray-200">
        <h3 className="mb-4">Subscription health</h3>

        <div className="space-y-3">
          {subscriptions.map((sub, i) => (
            <div key={i} className="flex items-center justify-between">
              <div>
                <div className="text-sm">{sub.name}</div>
                <div className="text-xs text-gray-500">
                  {sub.category} · {sub.status}
                </div>
              </div>

              <div className="text-sm">€{sub.amount.toFixed(2)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
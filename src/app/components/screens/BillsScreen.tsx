import { AlertTriangle, CheckCircle2, TrendingDown, Wallet } from 'lucide-react';

export function BillsScreen() {
  const subscriptions = [
    { name: 'Netflix', amount: 15.99, status: 'Inactive' },
    { name: 'Spotify', amount: 9.99, status: 'Active' },
    { name: 'ChatGPT Plus', amount: 20.0, status: 'Active' },
    { name: 'Adobe Creative', amount: 54.99, status: 'Active' },
    { name: 'iCloud Storage', amount: 2.99, status: 'Active' },
    { name: 'YouTube Premium', amount: 13.99, status: 'Inactive' },
  ];

  const monthlyTotal = subscriptions.reduce((sum, sub) => sum + sub.amount, 0);
  const inactive = subscriptions.filter((sub) => sub.status === 'Inactive');
  const potentialSavings = inactive.reduce((sum, sub) => sum + sub.amount, 0);
  const yearlySavings = potentialSavings * 12;

  return (
    <div className="p-4 space-y-6 bg-gray-50 min-h-screen">
      <div>
        <h1>Overview</h1>
        <div className="text-sm text-gray-500 mt-1">Subscription statistics</div>
      </div>

      <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-6 text-white">
        <div className="text-sm opacity-90 mb-1">Monthly Total</div>
        <div className="text-3xl mb-3">€{monthlyTotal.toFixed(2)}</div>
        <div className="flex items-center gap-2 text-sm opacity-90">
          <Wallet size={16} />
          <span>{subscriptions.length} active subscriptions</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <div className="text-sm text-gray-500 mb-1">Potential saving</div>
          <div className="text-xl">€{potentialSavings.toFixed(2)}</div>
          <div className="text-xs text-green-600 flex items-center gap-1 mt-2">
            <TrendingDown size={12} />
            <span>per month</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <div className="text-sm text-gray-500 mb-1">Yearly saving</div>
          <div className="text-xl">€{yearlySavings.toFixed(2)}</div>
          <div className="text-xs text-green-600 flex items-center gap-1 mt-2">
            <TrendingDown size={12} />
            <span>if cancelled</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 border border-gray-200">
        <h3 className="mb-4">Subscription health</h3>

        <div className="space-y-3">
          {subscriptions.map((sub, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    sub.status === 'Inactive' ? 'bg-orange-100' : 'bg-green-100'
                  }`}
                >
                  {sub.status === 'Inactive' ? (
                    <AlertTriangle size={18} className="text-orange-600" />
                  ) : (
                    <CheckCircle2 size={18} className="text-green-600" />
                  )}
                </div>

                <div>
                  <div className="text-sm">{sub.name}</div>
                  <div className="text-xs text-gray-500">{sub.status}</div>
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
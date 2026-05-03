export function SubscriptionsScreen() {
  const subscriptions = [
    { name: 'Netflix', amount: 15.99, billing: 'Monthly', nextDate: 'May 30', color: 'bg-red-500' },
    { name: 'Spotify', amount: 9.99, billing: 'Monthly', nextDate: 'May 3', color: 'bg-green-500' },
    { name: 'ChatGPT Plus', amount: 20.0, billing: 'Monthly', nextDate: 'May 15', color: 'bg-purple-500' },
    { name: 'Adobe Creative', amount: 54.99, billing: 'Monthly', nextDate: 'May 8', color: 'bg-blue-500' },
    { name: 'iCloud Storage', amount: 2.99, billing: 'Monthly', nextDate: 'May 12', color: 'bg-gray-500' },
    { name: 'YouTube Premium', amount: 13.99, billing: 'Monthly', nextDate: 'May 20', color: 'bg-red-600' },
  ];

  const total = subscriptions.reduce((sum, sub) => sum + sub.amount, 0);

  return (
    <div className="p-4 space-y-6">
      <div>
        <h1>Subscriptions</h1>
        <div className="text-sm text-gray-500 mt-1">Manage your recurring payments</div>
      </div>

      <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-6 text-white">
        <div className="text-sm opacity-90 mb-1">Monthly Total</div>
        <div className="text-3xl">${total.toFixed(2)}</div>
        <div className="text-sm opacity-90 mt-2">{subscriptions.length} active subscriptions</div>
      </div>

      <div className="space-y-3">
        {subscriptions.map((sub, i) => (
          <div key={i} className="bg-white rounded-xl p-4 border border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl ${sub.color} flex items-center justify-center text-white`}>
                {sub.name[0]}
              </div>
              <div>
                <div className="text-sm">{sub.name}</div>
                <div className="text-xs text-gray-500">Next: {sub.nextDate}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm">${sub.amount}</div>
              <div className="text-xs text-gray-500">{sub.billing}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

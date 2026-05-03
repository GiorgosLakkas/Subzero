export function SubscriptionsScreen() {
  const subscriptions = [
    { name: 'Netflix', amount: 15.99, billing: 'Monthly', nextDate: 'May 30', lastUsed: '65 days ago', inactive: true, color: 'bg-red-500' },
    { name: 'Spotify', amount: 9.99, billing: 'Monthly', nextDate: 'May 3', lastUsed: 'Yesterday', inactive: false, color: 'bg-green-500' },
    { name: 'ChatGPT Plus', amount: 20.0, billing: 'Monthly', nextDate: 'May 15', lastUsed: 'Today', inactive: false, color: 'bg-purple-500' },
    { name: 'Adobe Creative', amount: 54.99, billing: 'Monthly', nextDate: 'May 8', lastUsed: '2 days ago', inactive: false, color: 'bg-blue-500' },
    { name: 'iCloud Storage', amount: 2.99, billing: 'Monthly', nextDate: 'May 12', lastUsed: 'Today', inactive: false, color: 'bg-gray-500' },
    { name: 'YouTube Premium', amount: 13.99, billing: 'Monthly', nextDate: 'May 20', lastUsed: '78 days ago', inactive: true, color: 'bg-red-600' },
  ];

  const total = subscriptions.reduce((sum, sub) => sum + sub.amount, 0);
  const inactive = subscriptions.filter((sub) => sub.inactive);
  const potentialSavings = inactive.reduce((sum, sub) => sum + sub.amount, 0);

  return (
    <div className="p-4 space-y-6 bg-gray-50 min-h-screen">
      <div>
        <h1>Subscriptions</h1>
        <div className="text-sm text-gray-500 mt-1">
          Manage your recurring payments
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-6 text-white">
        <div className="text-sm opacity-90 mb-1">Monthly Total</div>
        <div className="text-3xl">€{total.toFixed(2)}</div>
        <div className="text-sm opacity-90 mt-2">
          {subscriptions.length} active subscriptions
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-2xl p-4">
        <div className="text-sm text-green-700">
          Average users save €45/month by cancelling inactive subscriptions.
        </div>
      </div>

      <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4">
        <div className="text-sm text-orange-700">
          SUB ZERO found {inactive.length} inactive subscriptions. You could save €{potentialSavings.toFixed(2)}/month.
        </div>
      </div>

      <div>
        <h3 className="mb-3">Suggested cancellations</h3>

        <div className="space-y-3">
          {inactive.map((sub, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-gray-200 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl ${sub.color} flex items-center justify-center text-white`}>
                    {sub.name[0]}
                  </div>

                  <div>
                    <div className="text-sm">{sub.name}</div>
                    <div className="text-xs text-gray-500">
                      Last used: {sub.lastUsed}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-sm">€{sub.amount.toFixed(2)}</div>
                  <div className="text-xs text-gray-500">{sub.billing}</div>
                </div>
              </div>

              <button className="w-full bg-red-500 text-white rounded-xl py-3 text-sm">
                Cancel subscription
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3">All subscriptions</h3>

        <div className="space-y-3">
          {subscriptions.map((sub, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl ${sub.color} flex items-center justify-center text-white`}>
                  {sub.name[0]}
                </div>

                <div>
                  <div className="text-sm">{sub.name}</div>
                  <div className="text-xs text-gray-500">
                    Next: {sub.nextDate}
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-sm">€{sub.amount.toFixed(2)}</div>
                <div className="text-xs text-gray-500">
                  {sub.inactive ? 'Inactive' : sub.billing}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
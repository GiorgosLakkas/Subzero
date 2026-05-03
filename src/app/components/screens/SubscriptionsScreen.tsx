export function SubscriptionsScreen() {
  const subscriptions = [
    {
      name: 'Netflix',
      amount: 15.99,
      billing: 'Monthly',
      nextDate: 'May 30',
      lastUsed: '65 days ago',
      inactive: true,
      icon: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg',
    },
    {
      name: 'Spotify',
      amount: 9.99,
      billing: 'Monthly',
      nextDate: 'May 3',
      lastUsed: 'Yesterday',
      inactive: false,
      icon: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
    },
    {
      name: 'ChatGPT Plus',
      amount: 20.0,
      billing: 'Monthly',
      nextDate: 'May 15',
      lastUsed: 'Today',
      inactive: false,
      icon: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
    },
    {
      name: 'Adobe Creative',
      amount: 54.99,
      billing: 'Monthly',
      nextDate: 'May 8',
      lastUsed: '2 days ago',
      inactive: false,
      icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_Logo.png',
    },
    {
      name: 'iCloud Storage',
      amount: 2.99,
      billing: 'Monthly',
      nextDate: 'May 12',
      lastUsed: 'Today',
      inactive: false,
      icon: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    },
    {
      name: 'YouTube Premium',
      amount: 13.99,
      billing: 'Monthly',
      nextDate: 'May 20',
      lastUsed: '78 days ago',
      inactive: true,
      icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg',
    },
  ];

  const total = subscriptions.reduce((sum, sub) => sum + sub.amount, 0);
  const inactive = subscriptions.filter((sub) => sub.inactive);
  const potentialSavings = inactive.reduce((sum, sub) => sum + sub.amount, 0);

  return (
    <div className="p-4 space-y-6 bg-gray-50 min-h-screen">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-blue-700 bg-clip-text text-transparent">
          Subscriptions
        </h1>
        <div className="text-sm text-gray-500 mt-1">
          Manage your recurring payments
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-900 to-blue-700 rounded-2xl p-6 text-white">
        <div className="text-sm opacity-90 mb-1">Monthly Total</div>
        <div className="text-3xl">€{total.toFixed(2)}</div>
        <div className="text-sm opacity-90 mt-2">
          {subscriptions.length} active subscriptions
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
        <div className="text-sm text-blue-800">
          SUB ZERO found {inactive.length} inactive subscriptions. You could save €
          {potentialSavings.toFixed(2)}/month.
        </div>
      </div>

      <div>
        <h3 className="mb-3">Suggested cancellations</h3>

        <div className="space-y-3">
          {inactive.map((sub, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-4 border border-gray-200 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center overflow-hidden">
                    <img
                      src={sub.icon}
                      alt={sub.name}
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
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

              <button className="w-full bg-red-500 text-white rounded-xl py-3 text-sm font-medium transition active:scale-95">
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
            <div
              key={i}
              className="bg-white rounded-xl p-4 border border-gray-200 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    src={sub.icon}
                    alt={sub.name}
                    className="w-8 h-8 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
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
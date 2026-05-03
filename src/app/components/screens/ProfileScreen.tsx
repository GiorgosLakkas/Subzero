import {
  Bell,
  CreditCard,
  Lock,
  LogOut,
  Settings,
  Shield,
  User,
} from 'lucide-react';

export function ProfileScreen() {
  const items = [
    { icon: User, label: 'Personal information' },
    { icon: CreditCard, label: 'Linked accounts' },
    { icon: Bell, label: 'Notifications' },
    { icon: Shield, label: 'Privacy and security' },
    { icon: Settings, label: 'Preferences' },
  ];

  return (
    <div className="p-4 space-y-6 bg-gray-50 min-h-screen">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-blue-700 bg-clip-text text-transparent">
          Profile
        </h1>
        <div className="text-sm text-gray-500 mt-1">
          Manage your SUB ZERO account
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-900 to-blue-700 rounded-2xl p-5 text-white">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-white text-blue-700 flex items-center justify-center text-2xl font-bold">
            E
          </div>

          <div>
            <div className="text-lg">Eleftheria</div>
            <div className="text-sm opacity-90">Free plan</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        {items.map((item, i) => {
          const Icon = item.icon;

          return (
            <button
              key={i}
              className="w-full flex items-center justify-between p-4 border-b border-gray-100 last:border-b-0 transition active:scale-[0.99]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Icon size={18} className="text-blue-700" />
                </div>

                <div className="text-sm">{item.label}</div>
              </div>

              <div className="text-gray-400">›</div>
            </button>
          );
        })}
      </div>

      <div className="bg-white rounded-2xl p-4 border border-gray-200 space-y-3">
        <div className="flex items-center gap-2">
          <Lock size={18} className="text-blue-700" />
          <h3>Security note</h3>
        </div>

        <div className="text-sm text-gray-500">
          SUB ZERO only uses subscription data to identify recurring payments and
          suggest savings.
        </div>
      </div>

      <button className="w-full bg-red-500 text-white rounded-xl py-3 text-sm font-medium flex items-center justify-center gap-2 transition active:scale-95">
        <LogOut size={18} />
        Log out
      </button>
    </div>
  );
}

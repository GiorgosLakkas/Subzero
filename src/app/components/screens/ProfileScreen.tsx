import { ChevronRight, Bell, Lock, CreditCard, HelpCircle, LogOut } from 'lucide-react';

export function ProfileScreen() {
  const menuItems = [
    { icon: Bell, label: 'Notifications', hasArrow: true },
    { icon: Lock, label: 'Privacy & Security', hasArrow: true },
    { icon: CreditCard, label: 'Linked Accounts', hasArrow: true },
    { icon: HelpCircle, label: 'Help & Support', hasArrow: true },
  ];

  return (
    <div className="p-4 space-y-6">
      <div>
        <h1>Profile</h1>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-gray-200 flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white text-xl">
          JD
        </div>
        <div className="flex-1">
          <div className="text-lg">John Doe</div>
          <div className="text-sm text-gray-500">john.doe@email.com</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 divide-y divide-gray-200">
        {menuItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <button
              key={i}
              className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors first:rounded-t-2xl last:rounded-b-2xl"
            >
              <div className="flex items-center gap-3">
                <Icon size={20} className="text-gray-600" />
                <span className="text-sm">{item.label}</span>
              </div>
              {item.hasArrow && <ChevronRight size={18} className="text-gray-400" />}
            </button>
          );
        })}
      </div>

      <div className="bg-white rounded-2xl p-4 border border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm">App Version</div>
          <div className="text-sm text-gray-500">2.4.1</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm">Member Since</div>
          <div className="text-sm text-gray-500">January 2024</div>
        </div>
      </div>

      <button className="w-full bg-red-50 text-red-600 rounded-xl p-4 flex items-center justify-center gap-2">
        <LogOut size={18} />
        <span>Log Out</span>
      </button>
    </div>
  );
}

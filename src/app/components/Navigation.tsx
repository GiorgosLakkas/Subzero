import { Home, CreditCard, Bot, BarChart3, User } from 'lucide-react';

interface NavigationProps {
  activeScreen: string;
  onNavigate: (screen: string) => void;
}

export function Navigation({ activeScreen, onNavigate }: NavigationProps) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'subscriptions', icon: CreditCard, label: 'Subs' },
    { id: 'ai', icon: Bot, label: 'AI' },
    { id: 'overview', icon: BarChart3, label: 'Stats' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeScreen === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="flex flex-col items-center justify-center gap-1 px-3 py-2 transition active:scale-95"
            >
              <div
                className={
                  isActive
                    ? 'w-9 h-9 rounded-xl bg-gradient-to-br from-slate-900 to-blue-700 flex items-center justify-center text-white shadow-sm'
                    : 'w-9 h-9 rounded-xl flex items-center justify-center text-gray-400'
                }
              >
                <Icon size={21} />
              </div>

              <span
                className={`text-[10px] ${
                  isActive ? 'text-blue-700 font-medium' : 'text-gray-400'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
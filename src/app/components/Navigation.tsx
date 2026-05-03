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
              className="flex flex-col items-center justify-center gap-1 px-3 py-2"
            >
              <Icon
                size={22}
                className={isActive ? 'text-blue-600' : 'text-gray-400'}
              />
              <span className={`text-[10px] ${isActive ? 'text-blue-600' : 'text-gray-400'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
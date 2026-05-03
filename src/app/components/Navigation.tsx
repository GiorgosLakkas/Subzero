import { Home, CreditCard, Wallet, Calendar, Target, User } from 'lucide-react';

interface NavigationProps {
  activeScreen: string;
  onNavigate: (screen: string) => void;
}

export function Navigation({ activeScreen, onNavigate }: NavigationProps) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'subscriptions', icon: CreditCard, label: 'Subs' },
    { id: 'budgets', icon: Wallet, label: 'Budget' },
    { id: 'bills', icon: Calendar, label: 'Bills' },
    { id: 'goals', icon: Target, label: 'Goals' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 pb-safe">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="flex flex-col items-center justify-center gap-1 px-3 py-2 transition-colors"
            >
              <Icon
                size={22}
                className={isActive ? 'text-primary' : 'text-gray-400'}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className={`text-[10px] ${isActive ? 'text-primary' : 'text-gray-400'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

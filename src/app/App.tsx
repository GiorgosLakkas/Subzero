import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomeScreen } from './components/screens/HomeScreen';
import { SubscriptionsScreen } from './components/screens/SubscriptionsScreen';
import { BudgetsScreen } from './components/screens/BudgetsScreen';
import { BillsScreen } from './components/screens/BillsScreen';
import { GoalsScreen } from './components/screens/GoalsScreen';
import { ProfileScreen } from './components/screens/ProfileScreen';

export default function App() {
  const [activeScreen, setActiveScreen] = useState('home');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'home':
        return <HomeScreen />;
      case 'subscriptions':
        return <SubscriptionsScreen />;
      case 'budgets':
        return <BudgetsScreen />;
      case 'bills':
        return <BillsScreen />;
      case 'goals':
        return <GoalsScreen />;
      case 'profile':
        return <ProfileScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="size-full bg-gray-50 max-w-md mx-auto flex flex-col">
      <div className="flex-1 overflow-y-auto pb-20">
        {renderScreen()}
      </div>
      <Navigation activeScreen={activeScreen} onNavigate={setActiveScreen} />
    </div>
  );
}
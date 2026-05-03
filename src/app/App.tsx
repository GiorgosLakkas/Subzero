import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomeScreen } from './components/screens/HomeScreen';
import { SubscriptionsScreen } from './components/screens/SubscriptionsScreen';
import { AIScreen } from './components/screens/AIScreen';
import { BillsScreen } from './components/screens/BillsScreen';
import { ProfileScreen } from './components/screens/ProfileScreen';

export default function App() {
  const [activeScreen, setActiveScreen] = useState('home');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'home':
        return <HomeScreen onNavigate={setActiveScreen} />;
      case 'subscriptions':
        return <SubscriptionsScreen />;
      case 'ai':
        return <AIScreen />;
      case 'overview':
        return <BillsScreen />;
      case 'profile':
        return <ProfileScreen />;
      default:
        return <HomeScreen onNavigate={setActiveScreen} />;
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
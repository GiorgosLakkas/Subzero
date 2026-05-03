import { ArrowRight, ShieldCheck, Star, TrendingDown } from 'lucide-react';

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  const testimonials = [
    { quote: 'I cancelled 3 subscriptions in one minute.', name: 'Dimitris, student' },
    { quote: 'It showed me services I forgot I was paying for.', name: 'Marina, freelancer' },
    { quote: 'Simple enough that I felt safe using it.', name: 'Despina, retired user' },
  ];

  return (
    <div className="p-4 space-y-6 bg-gray-50 min-h-screen">
      <div>
        <div className="text-sm text-gray-500">Welcome to</div>
        <h1 className="text-3xl">SUB ZERO</h1>
        <div className="text-sm text-gray-500 mt-1">
          Manage your subscriptions before they manage your money.
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-900 to-blue-700 rounded-3xl p-6 text-white space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
          <TrendingDown size={24} />
        </div>

        <div>
          <div className="text-2xl leading-tight">
            Find unused subscriptions. Cancel with confidence.
          </div>
          <div className="text-sm opacity-90 mt-2">
            Average users save €45/month by cancelling inactive services.
          </div>
        </div>

        <button
          onClick={() => onNavigate('subscriptions')}
          className="w-full bg-white text-slate-900 rounded-2xl py-3 flex items-center justify-center gap-2"
        >
          Manage subscriptions
          <ArrowRight size={18} />
        </button>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-gray-200">
        <h3 className="mb-3">What others say</h3>

        <div className="space-y-3">
          {testimonials.map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-3 border border-gray-100">
              <div className="flex gap-1 mb-2 text-yellow-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={13} fill="currentColor" />
                ))}
              </div>
              <div className="text-sm">“{item.quote}”</div>
              <div className="text-xs text-gray-500 mt-1">{item.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-gray-200 space-y-3">
        <div className="flex items-center gap-2">
          <ShieldCheck size={20} className="text-green-600" />
          <h3>Log in securely</h3>
        </div>

        <div className="text-sm text-gray-500">
          Connect your account to detect recurring payments automatically.
        </div>

        <button className="w-full bg-blue-600 text-white rounded-xl py-3 text-sm">
          Log in / Connect bank
        </button>
      </div>
    </div>
  );
}
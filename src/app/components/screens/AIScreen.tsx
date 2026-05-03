import { Bot, Send, Sparkles } from 'lucide-react';

export function AIScreen() {
  const suggestions = [
    { name: 'Netflix', reason: 'Not used for 65 days', saving: 15.99 },
    { name: 'YouTube Premium', reason: 'Not used for 78 days', saving: 13.99 },
  ];

  const totalSaving = suggestions.reduce((sum, item) => sum + item.saving, 0);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="p-4 space-y-4 pb-24">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-blue-700 bg-clip-text text-transparent">
            AI Assistant
          </h1>
          <div className="text-sm text-gray-500 mt-1">
            Your cancellation advisor
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-blue-700 rounded-2xl p-5 text-white">
          <div className="flex items-center gap-2 text-sm opacity-90 mb-2">
            <Sparkles size={16} />
            Smart recommendation
          </div>

          <div className="text-2xl">
            Save €{totalSaving.toFixed(2)}/month
          </div>

          <div className="text-sm opacity-90 mt-1">
            Based on your inactive subscriptions.
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-900 to-blue-700 text-white flex items-center justify-center shrink-0">
              <Bot size={18} />
            </div>

            <div className="bg-white rounded-2xl rounded-tl-sm p-4 border border-gray-200 text-sm">
              I found 2 subscriptions that look inactive. You can cancel them
              and save €{totalSaving.toFixed(2)} every month.
            </div>
          </div>

          {suggestions.map((item, i) => (
            <div
              key={i}
              className="ml-12 bg-white rounded-2xl p-4 border border-gray-200 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm">
                    {item.name} looks inactive. Cancel and save?
                  </div>
                  <div className="text-xs text-gray-500">{item.reason}</div>
                </div>

                <div className="text-sm">€{item.saving.toFixed(2)}</div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button className="bg-red-500 text-white rounded-xl py-2 text-sm font-medium transition active:scale-95">
                  Cancel
                </button>

                <button className="bg-gray-100 text-gray-700 rounded-xl py-2 text-sm transition active:scale-95">
                  Keep
                </button>
              </div>
            </div>
          ))}

          <div className="flex gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-900 to-blue-700 text-white flex items-center justify-center shrink-0">
              <Bot size={18} />
            </div>

            <div className="bg-white rounded-2xl rounded-tl-sm p-4 border border-gray-200 text-sm">
              I recommend cancelling Netflix first because it has the highest
              unused cost.
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-3 flex items-center gap-2 mt-4">
          <div className="flex-1 text-sm text-gray-400">
            Ask SUB ZERO AI...
          </div>

          <button className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-900 to-blue-700 text-white flex items-center justify-center transition active:scale-95">
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
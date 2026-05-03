import { Target } from 'lucide-react';

export function GoalsScreen() {
  const goals = [
    { name: 'Emergency Fund', current: 4200, target: 10000, color: 'bg-blue-500', emoji: '🛡️' },
    { name: 'Vacation', current: 1850, target: 5000, color: 'bg-purple-500', emoji: '✈️' },
    { name: 'New Car', current: 8500, target: 25000, color: 'bg-green-500', emoji: '🚗' },
    { name: 'Home Down Payment', current: 12000, target: 50000, color: 'bg-orange-500', emoji: '🏡' },
  ];

  const totalSaved = goals.reduce((sum, goal) => sum + goal.current, 0);
  const totalTarget = goals.reduce((sum, goal) => sum + goal.target, 0);

  return (
    <div className="p-4 space-y-6">
      <div>
        <h1>Goals</h1>
        <div className="text-sm text-gray-500 mt-1">Track your savings goals</div>
      </div>

      <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl p-6 text-white">
        <div className="text-sm opacity-90 mb-1">Total Saved</div>
        <div className="text-3xl">${totalSaved.toLocaleString()}</div>
        <div className="text-sm opacity-90 mt-2">
          {((totalSaved / totalTarget) * 100).toFixed(1)}% of ${totalTarget.toLocaleString()} goal
        </div>
      </div>

      <div className="space-y-4">
        {goals.map((goal, i) => {
          const percentage = (goal.current / goal.target) * 100;

          return (
            <div key={i} className="bg-white rounded-xl p-4 border border-gray-200">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-2xl">
                  {goal.emoji}
                </div>
                <div className="flex-1">
                  <div className="text-sm mb-1">{goal.name}</div>
                  <div className="text-xs text-gray-500">
                    ${goal.current.toLocaleString()} of ${goal.target.toLocaleString()}
                  </div>
                </div>
                <div className="text-sm text-gray-500">{percentage.toFixed(0)}%</div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-2 rounded-full transition-all ${goal.color}`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">
                ${(goal.target - goal.current).toLocaleString()} to go
              </div>
            </div>
          );
        })}
      </div>

      <button className="w-full bg-primary text-primary-foreground rounded-xl p-4 flex items-center justify-center gap-2">
        <Target size={18} />
        <span>Add New Goal</span>
      </button>
    </div>
  );
}

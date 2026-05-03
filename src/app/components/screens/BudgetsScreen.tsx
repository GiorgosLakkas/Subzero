export function BudgetsScreen() {
  const budgets = [
    { category: 'Groceries', spent: 420, limit: 600, color: 'bg-green-500' },
    { category: 'Dining Out', spent: 280, limit: 300, color: 'bg-orange-500' },
    { category: 'Entertainment', spent: 145, limit: 200, color: 'bg-purple-500' },
    { category: 'Transportation', spent: 180, limit: 250, color: 'bg-blue-500' },
    { category: 'Shopping', spent: 320, limit: 400, color: 'bg-pink-500' },
    { category: 'Health', spent: 90, limit: 150, color: 'bg-teal-500' },
  ];

  return (
    <div className="p-4 space-y-6">
      <div>
        <h1>Budgets</h1>
        <div className="text-sm text-gray-500 mt-1">Track your spending by category</div>
      </div>

      <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl p-6 text-white">
        <div className="text-sm opacity-90 mb-1">Total Budget</div>
        <div className="text-3xl">$1,900</div>
        <div className="text-sm opacity-90 mt-2">$1,435 spent • $465 remaining</div>
      </div>

      <div className="space-y-4">
        {budgets.map((budget, i) => {
          const percentage = (budget.spent / budget.limit) * 100;
          const isOverBudget = percentage > 100;

          return (
            <div key={i} className="bg-white rounded-xl p-4 border border-gray-200">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${budget.color}`}></div>
                  <div className="text-sm">{budget.category}</div>
                </div>
                <div className="text-sm text-gray-500">
                  ${budget.spent} / ${budget.limit}
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-2 rounded-full transition-all ${
                    isOverBudget ? 'bg-red-500' : budget.color
                  }`}
                  style={{ width: `${Math.min(percentage, 100)}%` }}
                ></div>
              </div>
              <div className={`text-xs mt-1 ${isOverBudget ? 'text-red-600' : 'text-gray-500'}`}>
                {isOverBudget
                  ? `$${budget.spent - budget.limit} over budget`
                  : `$${budget.limit - budget.spent} remaining`}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

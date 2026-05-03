import { CheckCircle2, Clock } from 'lucide-react';

export function BillsScreen() {
  const bills = [
    { name: 'Rent', amount: 1850, due: 'May 1', paid: true, category: 'Housing' },
    { name: 'Electricity', amount: 120, due: 'May 5', paid: false, category: 'Utilities' },
    { name: 'Internet', amount: 79.99, due: 'May 10', paid: false, category: 'Utilities' },
    { name: 'Phone', amount: 65, due: 'May 15', paid: false, category: 'Utilities' },
    { name: 'Car Insurance', amount: 145, due: 'May 20', paid: false, category: 'Insurance' },
    { name: 'Credit Card', amount: 428, due: 'May 25', paid: false, category: 'Credit' },
  ];

  const paidBills = bills.filter(b => b.paid);
  const upcomingBills = bills.filter(b => !b.paid);
  const totalUpcoming = upcomingBills.reduce((sum, bill) => sum + bill.amount, 0);

  return (
    <div className="p-4 space-y-6">
      <div>
        <h1>Bills</h1>
        <div className="text-sm text-gray-500 mt-1">Upcoming and paid bills</div>
      </div>

      <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl p-6 text-white">
        <div className="text-sm opacity-90 mb-1">Upcoming Bills</div>
        <div className="text-3xl">${totalUpcoming.toFixed(2)}</div>
        <div className="text-sm opacity-90 mt-2">{upcomingBills.length} bills to pay</div>
      </div>

      <div>
        <h3 className="mb-3">Upcoming</h3>
        <div className="space-y-3">
          {upcomingBills.map((bill, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <Clock size={18} className="text-orange-600" />
                </div>
                <div>
                  <div className="text-sm">{bill.name}</div>
                  <div className="text-xs text-gray-500">Due {bill.due}</div>
                </div>
              </div>
              <div className="text-sm">${bill.amount.toFixed(2)}</div>
            </div>
          ))}
        </div>
      </div>

      {paidBills.length > 0 && (
        <div>
          <h3 className="mb-3">Paid</h3>
          <div className="space-y-3">
            {paidBills.map((bill, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-gray-200 flex items-center justify-between opacity-60">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 size={18} className="text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm">{bill.name}</div>
                    <div className="text-xs text-gray-500">Paid {bill.due}</div>
                  </div>
                </div>
                <div className="text-sm">${bill.amount.toFixed(2)}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

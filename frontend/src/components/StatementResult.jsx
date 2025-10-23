export default function StatementResult({ result }) {
  return (
    <div className="mt-6 p-4 rounded-xl bg-slate-100 shadow text-primary">
      <h3 className="text-xl font-bold text-accent mb-2">Extracted Details</h3>
      <ul className="space-y-1 mb-6">
        <li>
          <b>Issuer:</b> {result.issuer || "N/A"}
        </li>
        <li>
          <b>Card Last 4:</b> {result.card_last4 || "N/A"}
        </li>
        <li>
          <b>Variant:</b> {result.variant || "N/A"}
        </li>
        <li>
          <b>Billing Cycle:</b> {result.billing_cycle || "N/A"}
        </li>
        <li>
          <b>Payment Due:</b> {result.payment_due || "N/A"}
        </li>
        <li>
          <b>Total Balance:</b> {result.total_balance || "N/A"}
        </li>
      </ul>
      <div>
        <h4 className="font-bold mb-2">Transactions</h4>
        <div className="overflow-x-auto max-h-64 rounded-xl border border-accent bg-white shadow">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-accent text-primary font-bold">
                <th className="px-3 py-2">Date</th>
                <th className="px-3 py-2">Description</th>
                <th className="px-3 py-2">Type</th>
                <th className="px-3 py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {!result.transactions?.length && (
                <tr>
                  <td colSpan={4} className="text-center py-3 text-slate-400">
                    No transactions found
                  </td>
                </tr>
              )}
              {result.transactions?.map((tx, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-slate-50" : "bg-white"}
                >
                  <td className="px-3 py-2 whitespace-nowrap">{tx.date}</td>
                  <td className="px-3 py-2 max-w-xs truncate">
                    {tx.description}
                  </td>
                  <td className="px-3 py-2">{tx.type}</td>
                  <td className="px-3 py-2 font-bold tabular-nums text-right">
                    {tx.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

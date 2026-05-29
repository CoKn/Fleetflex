import { useState } from "react";
import { toast } from "sonner";
import { CheckCircle2, TrendingUp, Download, Check } from "lucide-react";

const transactions = [
  {
    time: "12:00–15:00",
    action: "Cheap charging",
    energy: "2.4 MWh",
    vehicles: "64 EVs",
    financial: "+€720",
    battery: "€0",
    net: "+€720"
  },
  {
    time: "17:00–20:00",
    action: "Airport discharge",
    energy: "1.6 MWh",
    vehicles: "38 EVs",
    financial: "+€1,230",
    battery: "-€140",
    net: "+€1,090"
  },
  {
    time: "20:00–22:00",
    action: "Surplus sold to Mainova",
    energy: "420 kWh",
    vehicles: "9 EVs",
    financial: "+€88",
    battery: "-€26",
    net: "+€53"
  },
  {
    time: "08:00–11:00",
    action: "Morning charging",
    energy: "1.8 MWh",
    vehicles: "52 EVs",
    financial: "+€450",
    battery: "€0",
    net: "+€450"
  },
  {
    time: "14:00–16:00",
    action: "Peak shaving",
    energy: "0.9 MWh",
    vehicles: "28 EVs",
    financial: "+€380",
    battery: "-€70",
    net: "+€310"
  },
];

export default function Settlement() {
  const [isExporting, setIsExporting] = useState(false);
  const [exported, setExported] = useState(false);

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      setExported(true);
      toast.success("Report exported successfully!", {
        description: "Settlement report has been downloaded as CSV."
      });
      setTimeout(() => setExported(false), 3000);
    }, 1500);
  };

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-slate-900">
            Daily Settlement Report
          </h1>
          <button
            onClick={handleExport}
            disabled={isExporting}
            className={`flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg font-medium transition-all ${
              exported
                ? "bg-green-100 text-primary border-primary"
                : isExporting
                ? "bg-slate-100 text-slate-400 cursor-wait"
                : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            {exported ? (
              <>
                <Check className="w-5 h-5" />
                Exported
              </>
            ) : (
              <>
                <Download className={`w-5 h-5 ${isExporting ? "animate-bounce" : ""}`} />
                {isExporting ? "Exporting..." : "Export Report"}
              </>
            )}
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-sm text-slate-600 mb-1">Airport savings</div>
            <div className="text-2xl font-bold text-primary font-mono">€1,950</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-sm text-slate-600 mb-1">Surplus revenue</div>
            <div className="text-2xl font-bold text-amber-600 font-mono">€530</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-sm text-slate-600 mb-1">Battery wear</div>
            <div className="text-2xl font-bold text-red-600 font-mono">€210</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-sm text-slate-600 mb-1">Platform fee</div>
            <div className="text-2xl font-bold text-slate-900 font-mono">€160</div>
          </div>
          <div className="bg-white rounded-lg p-4 border-2 border-primary bg-green-50">
            <div className="text-sm text-slate-700 mb-1 font-medium">Net benefit</div>
            <div className="text-2xl font-bold text-primary font-mono">€2,110</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-sm text-slate-600 mb-1">CO₂ avoided</div>
            <div className="text-2xl font-bold text-green-700 font-mono">1.8t</div>
          </div>
        </div>

        {/* Success Banner */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8 flex items-start gap-3">
          <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-slate-900 mb-1">100% operational compliance maintained</h4>
            <p className="text-sm text-slate-700">FleetFlex protected all airport operations today. No vehicle readiness violations occurred.</p>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-900">Energy Optimized</h3>
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div className="text-3xl font-bold text-slate-900 font-mono mb-1">6.7 MWh</div>
            <div className="text-sm text-slate-600">Total energy managed today</div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-900">Vehicles Utilized</h3>
              <TrendingUp className="w-5 h-5 text-accent" />
            </div>
            <div className="text-3xl font-bold text-slate-900 font-mono mb-1">78 EVs</div>
            <div className="text-sm text-slate-600">Average participation rate: 85%</div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-900">Grid Impact</h3>
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div className="text-3xl font-bold text-slate-900 font-mono mb-1">-18%</div>
            <div className="text-sm text-slate-600">Average peak demand reduction</div>
          </div>
        </div>

        {/* Transaction Ledger */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-slate-50">
            <h3 className="text-lg font-semibold text-slate-900">Transaction Ledger</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">
                    Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">
                    Action
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">
                    Energy Volume
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">
                    Vehicle Pool
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">
                    Financial Impact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">
                    Battery Cost
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">
                    Net Value
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {transactions.map((tx, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-slate-900">
                      {tx.time}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {tx.action}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-slate-900">
                      {tx.energy}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700">
                      {tx.vehicles}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-primary">
                      {tx.financial}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-slate-700">
                      {tx.battery}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono font-semibold text-slate-900">
                      {tx.net}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-center text-sm text-slate-600">
          <p>Report generated: {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })} at {new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}</p>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { toast } from "sonner";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, ComposedChart } from "recharts";
import { CheckCircle, Battery, Zap, TrendingUp, AlertCircle, X } from "lucide-react";

const timelineData = [
  { id: 0, hour: "00:00", price: 0.08, demand: 3.2, action: "Idle" },
  { id: 1, hour: "01:00", price: 0.06, demand: 3.0, action: "Idle" },
  { id: 2, hour: "02:00", price: 0.05, demand: 2.8, action: "Idle" },
  { id: 3, hour: "03:00", price: 0.04, demand: 2.6, action: "Idle" },
  { id: 4, hour: "04:00", price: 0.03, demand: 2.5, action: "Idle" },
  { id: 5, hour: "05:00", price: 0.02, demand: 2.8, action: "Idle" },
  { id: 6, hour: "06:00", price: 0.05, demand: 3.5, action: "Idle" },
  { id: 7, hour: "07:00", price: 0.09, demand: 4.2, action: "Idle" },
  { id: 8, hour: "08:00", price: 0.12, demand: 4.8, action: "Idle" },
  { id: 9, hour: "09:00", price: 0.14, demand: 5.1, action: "Idle" },
  { id: 10, hour: "10:00", price: 0.15, demand: 5.3, action: "Idle" },
  { id: 11, hour: "11:00", price: 0.13, demand: 5.2, action: "Idle" },
  { id: 12, hour: "12:00", price: 0.03, demand: 5.0, action: "Charge" },
  { id: 13, hour: "13:00", price: 0.02, demand: 4.9, action: "Charge" },
  { id: 14, hour: "14:00", price: 0.01, demand: 4.8, action: "Charge" },
  { id: 15, hour: "15:00", price: 0.04, demand: 4.7, action: "Idle" },
  { id: 16, hour: "16:00", price: 0.11, demand: 5.0, action: "Idle" },
  { id: 17, hour: "17:00", price: 0.18, demand: 5.4, action: "Discharge" },
  { id: 18, hour: "18:00", price: 0.22, demand: 5.6, action: "Discharge" },
  { id: 19, hour: "19:00", price: 0.20, demand: 5.3, action: "Discharge" },
  { id: 20, hour: "20:00", price: 0.14, demand: 4.5, action: "Sell" },
  { id: 21, hour: "21:00", price: 0.12, demand: 4.0, action: "Sell" },
  { id: 22, hour: "22:00", price: 0.10, demand: 3.6, action: "Idle" },
  { id: 23, hour: "23:00", price: 0.09, demand: 3.3, action: "Idle" },
];

export default function DayAheadPlan() {
  const [isApproved, setIsApproved] = useState(false);
  const [selectedAction, setSelectedAction] = useState<number | null>(null);
  const [vehiclePlanModal, setVehiclePlanModal] = useState<number | null>(null);

  const handleApprove = () => {
    setIsApproved(true);
    toast.success("Plan approved successfully!", {
      description: "Tomorrow's energy plan has been scheduled and will execute automatically."
    });
    setTimeout(() => {
      setIsApproved(false);
    }, 5000);
  };

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-slate-900">
            Tomorrow's Energy Plan
          </h1>
          {isApproved && (
            <div className="flex items-center gap-2 bg-green-100 text-primary px-4 py-2 rounded-lg animate-fade-in">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Plan Approved</span>
            </div>
          )}
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-primary font-mono">€1,850</div>
            <div className="text-sm text-slate-600 mt-1">Expected charging cost saving</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-accent font-mono">1.6 MWh</div>
            <div className="text-sm text-slate-600 mt-1">Airport demand reduction</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-amber-600 font-mono">420 kWh</div>
            <div className="text-sm text-slate-600 mt-1">Expected surplus sale</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-slate-900 font-mono">€190</div>
            <div className="text-sm text-slate-600 mt-1">Battery wear cost</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-primary bg-green-50">
            <div className="text-2xl font-bold text-primary font-mono">€2,430</div>
            <div className="text-sm text-slate-700 mt-1 font-medium">Net expected benefit</div>
          </div>
        </div>

        {/* 24-Hour Timeline Chart */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">24-Hour Energy Plan</h3>
          <ResponsiveContainer width="100%" height={300} key="price-demand-chart">
            <ComposedChart data={timelineData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="hour" tick={{ fontSize: 12 }} interval="preserveStartEnd" />
              <YAxis yAxisId="left" label={{ value: 'Price (€/kWh)', angle: -90, position: 'insideLeft', style: { fontSize: 12 } }} />
              <YAxis yAxisId="right" orientation="right" label={{ value: 'Demand (MW)', angle: 90, position: 'insideRight', style: { fontSize: 12 } }} />
              <Tooltip />
              <Legend wrapperStyle={{ paddingTop: 10 }} />
              <Bar yAxisId="left" dataKey="price" fill="#3b82f6" name="Electricity Price" isAnimationActive={false} key="price-bar" />
              <Line yAxisId="right" type="monotone" dataKey="demand" stroke="#64748b" strokeWidth={2} name="Airport Demand" dot={false} isAnimationActive={false} key="demand-line" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Fleet Energy Plan */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-900">Fleet Energy Plan</h3>
            <p className="text-sm text-slate-600 mt-1">High-level plan with vehicle-level dispatch logic</p>
          </div>
          <div className="space-y-4">
            {/* Charging Action */}
            <button
              onClick={() => setSelectedAction(selectedAction === 0 ? null : 0)}
              className="w-full text-left"
            >
              <div className={`flex items-start gap-4 p-4 bg-green-50 rounded-lg border-2 transition-all ${
                selectedAction === 0 ? "border-primary shadow-md" : "border-green-200 hover:border-green-300"
              }`}>
                <div className="w-20 h-20 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="text-white text-center">
                    <div className="text-xs font-medium">12:00</div>
                    <div className="text-xs">–</div>
                    <div className="text-xs font-medium">15:00</div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Battery className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-slate-900">Charge fleet — low/negative prices</h4>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">Take advantage of low electricity prices to charge 64 vehicles to optimal levels for airport operations and energy buffer capacity.</p>

                  {selectedAction === 0 && (
                    <div className="mt-4 pt-4 border-t border-green-200 grid md:grid-cols-3 gap-4 animate-fade-in">
                      <div>
                        <div className="text-xs text-slate-600 mb-1">Total Energy</div>
                        <div className="text-lg font-bold text-slate-900 font-mono">2.4 MWh</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-600 mb-1">Average Price</div>
                        <div className="text-lg font-bold text-primary font-mono">€0.02/kWh</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-600 mb-1">Cost Saving</div>
                        <div className="text-lg font-bold text-primary font-mono">€720</div>
                      </div>
                      <div className="md:col-span-3">
                        <div className="text-xs text-slate-600 mb-2">Vehicle Types</div>
                        <div className="flex gap-2">
                          <span className="px-3 py-1 bg-white rounded-full text-xs border border-green-200">28 Ground Support</span>
                          <span className="px-3 py-1 bg-white rounded-full text-xs border border-green-200">22 Airport Buses</span>
                          <span className="px-3 py-1 bg-white rounded-full text-xs border border-green-200">14 Service Vans</span>
                        </div>
                      </div>
                      <div className="md:col-span-3 bg-white rounded p-3 border border-green-200">
                        <div className="flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <p className="text-xs text-slate-700">Smart charging prioritizes vehicles with earliest operational tasks and maintains minimum 20% SOC buffer for unexpected demands.</p>
                        </div>
                      </div>
                      <div className="md:col-span-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setVehiclePlanModal(0);
                          }}
                          className="w-full px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
                        >
                          View Vehicle-Level Plan
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </button>

            {/* Discharging Action */}
            <button
              onClick={() => setSelectedAction(selectedAction === 1 ? null : 1)}
              className="w-full text-left"
            >
              <div className={`flex items-start gap-4 p-4 bg-blue-50 rounded-lg border-2 transition-all ${
                selectedAction === 1 ? "border-accent shadow-md" : "border-blue-200 hover:border-blue-300"
              }`}>
                <div className="w-20 h-20 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="text-white text-center">
                    <div className="text-xs font-medium">17:00</div>
                    <div className="text-xs">–</div>
                    <div className="text-xs font-medium">20:00</div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-accent" />
                    <h4 className="font-semibold text-slate-900">Discharge to airport — peak electricity costs</h4>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">Use EV battery energy to power airport facilities during peak pricing, reducing grid dependency by 1.6 MWh and saving €1,230.</p>

                  {selectedAction === 1 && (
                    <div className="mt-4 pt-4 border-t border-blue-200 grid md:grid-cols-3 gap-4 animate-fade-in">
                      <div>
                        <div className="text-xs text-slate-600 mb-1">Total Energy</div>
                        <div className="text-lg font-bold text-slate-900 font-mono">1.6 MWh</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-600 mb-1">Peak Price Avoided</div>
                        <div className="text-lg font-bold text-accent font-mono">€0.20/kWh</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-600 mb-1">Net Savings</div>
                        <div className="text-lg font-bold text-accent font-mono">€1,090</div>
                      </div>
                      <div className="md:col-span-3">
                        <div className="text-xs text-slate-600 mb-2">Discharge Strategy</div>
                        <div className="flex gap-2">
                          <span className="px-3 py-1 bg-white rounded-full text-xs border border-blue-200">38 Vehicles Active</span>
                          <span className="px-3 py-1 bg-white rounded-full text-xs border border-blue-200">Average 42 kW/vehicle</span>
                        </div>
                      </div>
                      <div className="md:col-span-3">
                        <div className="text-xs text-slate-600 mb-2">Protected Reserve</div>
                        <div className="bg-white rounded p-2 border border-blue-200">
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-slate-700">Minimum SOC maintained</span>
                            <span className="text-sm font-bold text-accent font-mono">Above 60%</span>
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-3 bg-white rounded p-3 border border-blue-200">
                        <div className="flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <p className="text-xs text-slate-700">Real-time monitoring ensures no vehicle drops below required SOC for next operational task. System automatically stops discharge 30 minutes before scheduled task time.</p>
                        </div>
                      </div>
                      <div className="md:col-span-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setVehiclePlanModal(1);
                          }}
                          className="w-full px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
                        >
                          View Vehicle-Level Plan
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </button>

            {/* Surplus Selling Action */}
            <button
              onClick={() => setSelectedAction(selectedAction === 2 ? null : 2)}
              className="w-full text-left"
            >
              <div className={`flex items-start gap-4 p-4 bg-amber-50 rounded-lg border-2 transition-all ${
                selectedAction === 2 ? "border-amber-500 shadow-md" : "border-amber-200 hover:border-amber-300"
              }`}>
                <div className="w-20 h-20 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="text-white text-center">
                    <div className="text-xs font-medium">20:00</div>
                    <div className="text-xs">–</div>
                    <div className="text-xs font-medium">22:00</div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-amber-600" />
                    <h4 className="font-semibold text-slate-900">Sell surplus — airport demand covered</h4>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">With airport needs satisfied and vehicles protected, sell remaining 420 kWh to Mainova partner for additional revenue.</p>

                  {selectedAction === 2 && (
                    <div className="mt-4 pt-4 border-t border-amber-200 grid md:grid-cols-3 gap-4 animate-fade-in">
                      <div>
                        <div className="text-xs text-slate-600 mb-1">Surplus Energy</div>
                        <div className="text-lg font-bold text-slate-900 font-mono">420 kWh</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-600 mb-1">Market Price</div>
                        <div className="text-lg font-bold text-amber-600 font-mono">€0.21/kWh</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-600 mb-1">Net Revenue</div>
                        <div className="text-lg font-bold text-amber-600 font-mono">€53</div>
                      </div>
                      <div className="md:col-span-3">
                        <div className="text-xs text-slate-600 mb-2">Surplus Qualification</div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between bg-white rounded p-2 border border-amber-200">
                            <span className="text-xs text-slate-700">Airport demand satisfied</span>
                            <CheckCircle className="w-4 h-4 text-primary" />
                          </div>
                          <div className="flex items-center justify-between bg-white rounded p-2 border border-amber-200">
                            <span className="text-xs text-slate-700">Vehicle readiness protected</span>
                            <CheckCircle className="w-4 h-4 text-primary" />
                          </div>
                          <div className="flex items-center justify-between bg-white rounded p-2 border border-amber-200">
                            <span className="text-xs text-slate-700">Battery health threshold met</span>
                            <CheckCircle className="w-4 h-4 text-primary" />
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-3">
                        <div className="text-xs text-slate-600 mb-2">Revenue Breakdown</div>
                        <div className="bg-white rounded p-3 border border-amber-200 space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-slate-600">Gross revenue (420 kWh × €0.21)</span>
                            <span className="font-mono text-slate-900">€88</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-slate-600">Battery degradation cost</span>
                            <span className="font-mono text-red-600">-€26</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-slate-600">Platform transaction fee (10%)</span>
                            <span className="font-mono text-red-600">-€9</span>
                          </div>
                          <div className="flex justify-between text-xs font-semibold pt-1 border-t border-amber-200">
                            <span className="text-slate-900">Net to Fraport</span>
                            <span className="font-mono text-amber-600">€53</span>
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-3 bg-white rounded p-3 border border-amber-200">
                        <div className="flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                          <p className="text-xs text-slate-700">Surplus selling only activates when airport's evening demand forecast is covered and all operational vehicles exceed minimum required SOC by 15%+ margin.</p>
                        </div>
                      </div>
                      <div className="md:col-span-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setVehiclePlanModal(2);
                          }}
                          className="w-full px-4 py-2 bg-amber-500 text-white rounded-lg text-sm font-medium hover:bg-amber-600 transition-colors"
                        >
                          View Vehicle-Level Plan
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Approve Button */}
        <div className={`bg-white rounded-lg p-6 border-2 transition-all ${
          isApproved ? "border-primary bg-green-50" : "border-gray-200"
        }`}>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">
                {isApproved ? "Plan Approved ✓" : "Ready to approve?"}
              </h3>
              <p className="text-sm text-slate-600">
                {isApproved
                  ? "Tomorrow's energy plan has been scheduled and will execute automatically."
                  : "This plan optimizes for airport cost savings while protecting vehicle readiness."
                }
              </p>
            </div>
            <button
              onClick={handleApprove}
              disabled={isApproved}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                isApproved
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-primary text-white hover:bg-green-600 hover:shadow-lg"
              }`}
            >
              <CheckCircle className="w-5 h-5" />
              {isApproved ? "Approved" : "Approve Tomorrow's Plan"}
            </button>
          </div>
        </div>
      </div>

      {/* Vehicle-Level Plan Modals */}
      {vehiclePlanModal !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            {/* Charging Plan Modal */}
            {vehiclePlanModal === 0 && (
              <>
                <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-900">Vehicle-Level Charging Plan</h2>
                    <p className="text-sm text-slate-600 mt-1">Charging selected vehicles during low-price windows while protecting upcoming airport tasks.</p>
                  </div>
                  <button
                    onClick={() => setVehiclePlanModal(null)}
                    className="text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="p-6">
                  {/* Summary KPIs */}
                  <div className="grid md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <div className="text-2xl font-bold text-primary font-mono">64</div>
                      <div className="text-sm text-slate-600 mt-1">Vehicles charging</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <div className="text-2xl font-bold text-blue-600 font-mono">14</div>
                      <div className="text-sm text-slate-600 mt-1">Protected vehicles</div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 border border-gray-200">
                      <div className="text-2xl font-bold text-slate-900 font-mono">2.4 MWh</div>
                      <div className="text-sm text-slate-600 mt-1">Energy added</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <div className="text-2xl font-bold text-primary font-mono">€720</div>
                      <div className="text-sm text-slate-600 mt-1">Cost saving</div>
                    </div>
                  </div>

                  {/* Vehicle Table */}
                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-slate-50 border-b border-gray-200">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-600 uppercase">Vehicle ID</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-600 uppercase">Type</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-600 uppercase">Current SOC</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-600 uppercase">Required SOC</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-600 uppercase">Next Task</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-600 uppercase">Charger Type</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-600 uppercase">Action</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-600 uppercase">Reason</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="bg-white hover:bg-slate-50">
                          <td className="px-4 py-3 text-sm font-mono font-medium text-slate-900">GSE-042</td>
                          <td className="px-4 py-3 text-sm text-slate-700">Ground support</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900">42%</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900">60%</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-700">16:30</td>
                          <td className="px-4 py-3 text-sm text-slate-700">Bidirectional</td>
                          <td className="px-4 py-3"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Charge</span></td>
                          <td className="px-4 py-3 text-sm text-slate-600">Needed for later task</td>
                        </tr>
                        <tr className="bg-slate-50 hover:bg-slate-50">
                          <td className="px-4 py-3 text-sm font-mono font-medium text-slate-900">VAN-084</td>
                          <td className="px-4 py-3 text-sm text-slate-700">Service van</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900">55%</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900">50%</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-700">19:00</td>
                          <td className="px-4 py-3 text-sm text-slate-700">Bidirectional</td>
                          <td className="px-4 py-3"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Charge</span></td>
                          <td className="px-4 py-3 text-sm text-slate-600">Cheap price window</td>
                        </tr>
                        <tr className="bg-white hover:bg-slate-50">
                          <td className="px-4 py-3 text-sm font-mono font-medium text-slate-900">BUS-011</td>
                          <td className="px-4 py-3 text-sm text-slate-700">Airport bus</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900">68%</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900">75%</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-700">15:45</td>
                          <td className="px-4 py-3 text-sm text-slate-700">Fast charger</td>
                          <td className="px-4 py-3"><span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">Protect</span></td>
                          <td className="px-4 py-3 text-sm text-slate-600">Below required reserve</td>
                        </tr>
                        <tr className="bg-slate-50 hover:bg-slate-50">
                          <td className="px-4 py-3 text-sm font-mono font-medium text-slate-900">GSE-118</td>
                          <td className="px-4 py-3 text-sm text-slate-700">Ground support</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900">36%</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900">65%</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-700">18:20</td>
                          <td className="px-4 py-3 text-sm text-slate-700">Bidirectional</td>
                          <td className="px-4 py-3"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Charge</span></td>
                          <td className="px-4 py-3 text-sm text-slate-600">Operational readiness</td>
                        </tr>
                        <tr className="bg-white hover:bg-slate-50">
                          <td className="px-4 py-3 text-sm font-mono font-medium text-slate-900">VAN-092</td>
                          <td className="px-4 py-3 text-sm text-slate-700">Service van</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900">48%</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900">55%</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-700">17:15</td>
                          <td className="px-4 py-3 text-sm text-slate-700">Bidirectional</td>
                          <td className="px-4 py-3"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Charge</span></td>
                          <td className="px-4 py-3 text-sm text-slate-600">Needed for later task</td>
                        </tr>
                        <tr className="bg-slate-50 hover:bg-slate-50">
                          <td className="px-4 py-3 text-sm font-mono font-medium text-slate-900">GSE-075</td>
                          <td className="px-4 py-3 text-sm text-slate-700">Ground support</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900">62%</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900">58%</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-700">20:00</td>
                          <td className="px-4 py-3 text-sm text-slate-700">Bidirectional</td>
                          <td className="px-4 py-3"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Charge</span></td>
                          <td className="px-4 py-3 text-sm text-slate-600">Cheap price window</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}

            {/* Discharge Plan Modal */}
            {vehiclePlanModal === 1 && (
              <>
                <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-900">Vehicle-Level Airport Discharge Plan</h2>
                    <p className="text-sm text-slate-600 mt-1">Only vehicles above their operational reserve are used to power airport demand.</p>
                  </div>
                  <button
                    onClick={() => setVehiclePlanModal(null)}
                    className="text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="p-6">
                  {/* Summary KPIs */}
                  <div className="grid md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <div className="text-2xl font-bold text-accent font-mono">38</div>
                      <div className="text-sm text-slate-600 mt-1">Vehicles discharging</div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 border border-gray-200">
                      <div className="text-2xl font-bold text-slate-900 font-mono">22</div>
                      <div className="text-sm text-slate-600 mt-1">Vehicles excluded</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <div className="text-2xl font-bold text-accent font-mono">1.6 MWh</div>
                      <div className="text-sm text-slate-600 mt-1">Airport demand covered</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <div className="text-2xl font-bold text-accent font-mono">€1,230</div>
                      <div className="text-sm text-slate-600 mt-1">Airport savings</div>
                    </div>
                  </div>

                  {/* Safety Banner */}
                  <div className="bg-blue-50 border-l-4 border-accent rounded-lg p-4 mb-6">
                    <p className="text-sm text-blue-900">
                      <strong>Safety rule active:</strong> No vehicle may be discharged below its required SOC for the next airport task.
                    </p>
                  </div>

                  {/* Vehicle Table */}
                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-slate-50 border-b border-gray-200">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-600 uppercase">Vehicle ID</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-600 uppercase">Current SOC</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-600 uppercase">Minimum SOC</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-600 uppercase">Available kWh</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-600 uppercase">Next Task</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-600 uppercase">Planned Discharge</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-600 uppercase">Battery Cost</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-600 uppercase">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="bg-white hover:bg-slate-50">
                          <td className="px-4 py-3 text-sm font-mono font-medium text-slate-900">GSE-042</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900">82%</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900">55%</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900">16 kWh</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-700">04:30</td>
                          <td className="px-4 py-3 text-sm font-mono text-accent font-semibold">12 kWh</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-700">€2.10</td>
                          <td className="px-4 py-3"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Approved</span></td>
                        </tr>
                        <tr className="bg-slate-50 hover:bg-slate-50">
                          <td className="px-4 py-3 text-sm font-mono font-medium text-slate-900">VAN-084</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900">91%</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900">60%</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900">18 kWh</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-700">06:00</td>
                          <td className="px-4 py-3 text-sm font-mono text-accent font-semibold">14 kWh</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-700">€2.40</td>
                          <td className="px-4 py-3"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Approved</span></td>
                        </tr>
                        <tr className="bg-white hover:bg-slate-50">
                          <td className="px-4 py-3 text-sm font-mono font-medium text-slate-900">BUS-011</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900">67%</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900">70%</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900">0 kWh</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-700">02:10</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-700">0 kWh</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-700">€0</td>
                          <td className="px-4 py-3"><span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Excluded</span></td>
                        </tr>
                        <tr className="bg-slate-50 hover:bg-slate-50">
                          <td className="px-4 py-3 text-sm font-mono font-medium text-slate-900">GSE-099</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900">88%</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900">58%</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900">20 kWh</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-700">05:45</td>
                          <td className="px-4 py-3 text-sm font-mono text-accent font-semibold">15 kWh</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-700">€2.70</td>
                          <td className="px-4 py-3"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Approved</span></td>
                        </tr>
                        <tr className="bg-white hover:bg-slate-50">
                          <td className="px-4 py-3 text-sm font-mono font-medium text-slate-900">VAN-112</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900">85%</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900">62%</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900">14 kWh</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-700">07:30</td>
                          <td className="px-4 py-3 text-sm font-mono text-accent font-semibold">10 kWh</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-700">€1.80</td>
                          <td className="px-4 py-3"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Approved</span></td>
                        </tr>
                        <tr className="bg-slate-50 hover:bg-slate-50">
                          <td className="px-4 py-3 text-sm font-mono font-medium text-slate-900">GSE-107</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900">76%</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900">52%</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900">15 kWh</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-700">04:00</td>
                          <td className="px-4 py-3 text-sm font-mono text-accent font-semibold">11 kWh</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-700">€1.95</td>
                          <td className="px-4 py-3"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Approved</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}

            {/* Surplus Plan Modal */}
            {vehiclePlanModal === 2 && (
              <>
                <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-900">Surplus Energy Dispatch Plan</h2>
                    <p className="text-sm text-slate-600 mt-1">Only verified surplus capacity is offered to Mainova after airport demand and vehicle readiness are secured.</p>
                  </div>
                  <button
                    onClick={() => setVehiclePlanModal(null)}
                    className="text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="p-6">
                  {/* Summary KPIs */}
                  <div className="grid md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                      <div className="text-2xl font-bold text-amber-600 font-mono">9</div>
                      <div className="text-sm text-slate-600 mt-1">Surplus vehicles</div>
                    </div>
                    <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                      <div className="text-2xl font-bold text-amber-600 font-mono">420 kWh</div>
                      <div className="text-sm text-slate-600 mt-1">Total surplus energy</div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 border border-gray-200">
                      <div className="text-sm text-slate-600 mb-1">Suggested buyer</div>
                      <div className="text-lg font-semibold text-slate-900">Mainova / BKV</div>
                    </div>
                    <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                      <div className="text-2xl font-bold text-amber-600 font-mono">€53</div>
                      <div className="text-sm text-slate-600 mt-1">Net expected payout</div>
                    </div>
                  </div>

                  {/* Vehicle Table */}
                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-slate-50 border-b border-gray-200">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-600 uppercase">Vehicle ID</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-600 uppercase">Surplus kWh</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-600 uppercase">Delivery Window</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-600 uppercase">SOC Protected</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-600 uppercase">Buyer</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-600 uppercase">Gross Value</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-600 uppercase">Battery Cost</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-slate-600 uppercase">Net Value</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="bg-white hover:bg-slate-50">
                          <td className="px-4 py-3 text-sm font-mono font-medium text-slate-900">VAN-084</td>
                          <td className="px-4 py-3 text-sm font-mono text-amber-600 font-semibold">12 kWh</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-700">20:00–22:00</td>
                          <td className="px-4 py-3"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Yes</span></td>
                          <td className="px-4 py-3 text-sm text-slate-700">Mainova</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900">€2.52</td>
                          <td className="px-4 py-3 text-sm font-mono text-red-600">€0.70</td>
                          <td className="px-4 py-3 text-sm font-mono text-amber-600 font-semibold">€1.82</td>
                        </tr>
                        <tr className="bg-slate-50 hover:bg-slate-50">
                          <td className="px-4 py-3 text-sm font-mono font-medium text-slate-900">GSE-099</td>
                          <td className="px-4 py-3 text-sm font-mono text-amber-600 font-semibold">10 kWh</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-700">20:00–22:00</td>
                          <td className="px-4 py-3"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Yes</span></td>
                          <td className="px-4 py-3 text-sm text-slate-700">Mainova</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900">€2.10</td>
                          <td className="px-4 py-3 text-sm font-mono text-red-600">€0.60</td>
                          <td className="px-4 py-3 text-sm font-mono text-amber-600 font-semibold">€1.50</td>
                        </tr>
                        <tr className="bg-white hover:bg-slate-50">
                          <td className="px-4 py-3 text-sm font-mono font-medium text-slate-900">VAN-112</td>
                          <td className="px-4 py-3 text-sm font-mono text-amber-600 font-semibold">14 kWh</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-700">20:00–22:00</td>
                          <td className="px-4 py-3"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Yes</span></td>
                          <td className="px-4 py-3 text-sm text-slate-700">Mainova</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900">€2.94</td>
                          <td className="px-4 py-3 text-sm font-mono text-red-600">€0.80</td>
                          <td className="px-4 py-3 text-sm font-mono text-amber-600 font-semibold">€2.14</td>
                        </tr>
                        <tr className="bg-slate-50 hover:bg-slate-50">
                          <td className="px-4 py-3 text-sm font-mono font-medium text-slate-900">GSE-145</td>
                          <td className="px-4 py-3 text-sm font-mono text-amber-600 font-semibold">11 kWh</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-700">20:00–22:00</td>
                          <td className="px-4 py-3"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Yes</span></td>
                          <td className="px-4 py-3 text-sm text-slate-700">Mainova</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900">€2.31</td>
                          <td className="px-4 py-3 text-sm font-mono text-red-600">€0.65</td>
                          <td className="px-4 py-3 text-sm font-mono text-amber-600 font-semibold">€1.66</td>
                        </tr>
                        <tr className="bg-white hover:bg-slate-50">
                          <td className="px-4 py-3 text-sm font-mono font-medium text-slate-900">VAN-156</td>
                          <td className="px-4 py-3 text-sm font-mono text-amber-600 font-semibold">13 kWh</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-700">20:00–22:00</td>
                          <td className="px-4 py-3"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Yes</span></td>
                          <td className="px-4 py-3 text-sm text-slate-700">Mainova</td>
                          <td className="px-4 py-3 text-sm font-mono text-slate-900">€2.73</td>
                          <td className="px-4 py-3 text-sm font-mono text-red-600">€0.75</td>
                          <td className="px-4 py-3 text-sm font-mono text-amber-600 font-semibold">€1.98</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

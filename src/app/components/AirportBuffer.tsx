import { useMemo } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from "recharts";
import { ArrowRight, AlertCircle, Zap } from "lucide-react";

const liveData = [
  { id: 0, time: "17:00", gridBefore: 5.4, gridAfter: 4.68, evContribution: 0.72 },
  { id: 1, time: "17:15", gridBefore: 5.5, gridAfter: 4.73, evContribution: 0.77 },
  { id: 2, time: "17:30", gridBefore: 5.6, gridAfter: 4.84, evContribution: 0.76 },
  { id: 3, time: "17:45", gridBefore: 5.5, gridAfter: 4.78, evContribution: 0.72 },
  { id: 4, time: "18:00", gridBefore: 5.4, gridAfter: 4.68, evContribution: 0.72 },
  { id: 5, time: "18:15", gridBefore: 5.3, gridAfter: 4.58, evContribution: 0.72 },
  { id: 6, time: "18:30", gridBefore: 5.2, gridAfter: 4.48, evContribution: 0.72 },
];

export default function AirportBuffer() {
  const chartData = useMemo(() => liveData, []);

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-slate-900">
            Airport Energy Buffer Active
          </h1>
          <div className="flex items-center gap-2 bg-green-100 text-primary px-4 py-2 rounded-lg">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Live</span>
          </div>
        </div>

        {/* Current Status Cards */}
        <div className="grid md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-slate-900 font-mono">4.8 MW</div>
            <div className="text-sm text-slate-600 mt-1">Current airport demand</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-primary bg-green-50">
            <div className="text-2xl font-bold text-primary font-mono">720 kW</div>
            <div className="text-sm text-slate-700 mt-1 font-medium">EV battery contribution</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-accent font-mono">15%</div>
            <div className="text-sm text-slate-600 mt-1">Grid purchase reduction</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-primary font-mono">34</div>
            <div className="text-sm text-slate-600 mt-1">Vehicles discharging</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-blue-600 font-mono">44</div>
            <div className="text-sm text-slate-600 mt-1">Vehicles protected</div>
          </div>
        </div>

        {/* Energy Flow Diagram */}
        <div className="bg-white rounded-lg p-8 border border-gray-200 mb-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-8">Real-time Energy Flow</h3>
          <div className="flex items-center justify-center gap-8">
            {/* EV Fleet Source */}
            <div className="text-center">
              <div className="w-32 h-32 bg-green-100 rounded-2xl flex flex-col items-center justify-center mb-3 border-2 border-primary">
                <Zap className="w-12 h-12 text-primary mb-2" />
                <div className="text-sm font-semibold text-primary">EV Fleet</div>
                <div className="text-xs text-slate-600">Batteries</div>
              </div>
              <div className="text-2xl font-bold text-primary font-mono">720 kW</div>
              <div className="text-xs text-slate-600 mt-1">34 vehicles</div>
            </div>

            {/* Arrow */}
            <div className="flex flex-col items-center">
              <ArrowRight className="w-16 h-16 text-primary" strokeWidth={3} />
              <div className="text-sm font-medium text-primary mt-2">Discharging</div>
            </div>

            {/* Airport Destination */}
            <div className="text-center">
              <div className="w-32 h-32 bg-blue-100 rounded-2xl flex flex-col items-center justify-center mb-3 border-2 border-accent">
                <div className="text-3xl mb-1">🏢</div>
                <div className="text-sm font-semibold text-accent">Airport</div>
                <div className="text-xs text-slate-600">Facilities</div>
              </div>
              <div className="text-2xl font-bold text-accent font-mono">4.8 MW</div>
              <div className="text-xs text-slate-600 mt-1">Total demand</div>
            </div>
          </div>
        </div>

        {/* Operational Rule Alert */}
        <div className="bg-blue-50 border-l-4 border-accent rounded-lg p-4 mb-6 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-slate-900 mb-1">Operational rule active:</h4>
            <p className="text-sm text-slate-700">No vehicle may fall below required SOC for its next airport task.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

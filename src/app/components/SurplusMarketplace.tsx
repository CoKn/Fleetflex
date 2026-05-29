import { useState } from "react";
import { toast } from "sonner";
import { CheckCircle2, XCircle, Clock, TrendingUp, AlertTriangle } from "lucide-react";

export default function SurplusMarketplace() {
  const [decision, setDecision] = useState<"accepted" | "rejected" | "held" | null>(null);

  const handleAccept = () => {
    setDecision("accepted");
    toast.success("Offer accepted!", {
      description: "Surplus energy sale scheduled for 20:00–22:00. Expected payout: €53"
    });
  };

  const handleReject = () => {
    setDecision("rejected");
    toast.error("Offer rejected", {
      description: "The 420 kWh capacity remains available for airport use."
    });
  };

  const handleHold = () => {
    setDecision("held");
    toast.info("Held for airport reserve", {
      description: "420 kWh reserved as safety buffer for unexpected demand."
    });
  };

  const resetDecision = () => {
    setDecision(null);
  };

  return (
    <div className="p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-slate-900">
            Surplus Energy Offer
          </h1>
          {decision && (
            <button
              onClick={resetDecision}
              className="text-sm text-slate-600 hover:text-slate-900 underline"
            >
              Reset Decision
            </button>
          )}
        </div>

        {/* Status Banner */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle2 className="w-6 h-6 text-primary" />
            <h3 className="text-lg font-semibold text-slate-900">
              Airport needs satisfied. Surplus capacity available.
            </h3>
          </div>
          <p className="text-sm text-slate-700 ml-9">
            All operational requirements met. Vehicle readiness protected. Ready to monetize surplus energy.
          </p>
        </div>

        {/* Surplus Offer Details */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Surplus Offer Details</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-slate-600 mb-1">Available energy</div>
              <div className="text-2xl font-bold text-slate-900 font-mono">420 kWh</div>
            </div>
            <div>
              <div className="text-sm text-slate-600 mb-1">Available power</div>
              <div className="text-2xl font-bold text-slate-900 font-mono">310 kW</div>
            </div>
            <div>
              <div className="text-sm text-slate-600 mb-1">Delivery window</div>
              <div className="text-xl font-semibold text-slate-900">20:00 – 22:00</div>
            </div>
            <div>
              <div className="text-sm text-slate-600 mb-1">Vehicles involved</div>
              <div className="text-xl font-semibold text-slate-900">9 EVs</div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm text-slate-700">Minimum vehicle SOC protected</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm text-slate-700">Battery wear priced in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Buyer Offer Card */}
        <div className="bg-white rounded-lg p-6 border-2 border-accent shadow-sm mb-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-1">Mainova Energy Desk</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm text-slate-600">Status: <span className="font-medium text-primary">Interested</span></span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-slate-600 mb-1">Bid price</div>
              <div className="text-3xl font-bold text-accent font-mono">€0.21<span className="text-lg text-slate-600">/kWh</span></div>
            </div>
          </div>

          {/* Financial Breakdown */}
          <div className="bg-slate-50 rounded-lg p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Estimated gross revenue</span>
              <span className="font-mono font-medium text-slate-900">€88</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Battery wear cost</span>
              <span className="font-mono font-medium text-red-600">-€26</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Platform fee</span>
              <span className="font-mono font-medium text-red-600">-€9</span>
            </div>
            <div className="flex justify-between text-base font-semibold pt-2 border-t border-gray-300">
              <span className="text-slate-900">Net payout to Fraport</span>
              <span className="font-mono text-primary">€53</span>
            </div>
          </div>
        </div>

        {/* Action Buttons or Result */}
        {!decision ? (
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900 mb-1">Decision required</h4>
                <p className="text-sm text-slate-600">Choose how to handle this surplus capacity offer.</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleHold}
                  className="flex items-center gap-2 border-2 border-gray-300 text-slate-700 px-6 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors"
                >
                  <Clock className="w-5 h-5" />
                  Hold for Reserve
                </button>
                <button
                  onClick={handleReject}
                  className="flex items-center gap-2 border-2 border-red-300 text-red-700 px-6 py-3 rounded-lg font-medium hover:bg-red-50 transition-colors"
                >
                  <XCircle className="w-5 h-5" />
                  Reject
                </button>
                <button
                  onClick={handleAccept}
                  className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 hover:shadow-lg transition-all"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  Accept Offer
                </button>
              </div>
            </div>
          </div>
        ) : decision === "accepted" ? (
          <div className="bg-green-50 rounded-lg p-6 border-2 border-primary animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Offer Accepted</h4>
                <p className="text-sm text-slate-700 mb-4">
                  The surplus energy offer has been accepted. Transaction scheduled for execution at 20:00 tomorrow.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-3 border border-green-200">
                    <div className="text-xs text-slate-600 mb-1">Delivery Time</div>
                    <div className="text-sm font-bold text-slate-900 font-mono">20:00–22:00</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-green-200">
                    <div className="text-xs text-slate-600 mb-1">Energy to Deliver</div>
                    <div className="text-sm font-bold text-slate-900 font-mono">420 kWh</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-green-200">
                    <div className="text-xs text-slate-600 mb-1">Expected Payout</div>
                    <div className="text-sm font-bold text-primary font-mono">€53</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : decision === "rejected" ? (
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300 animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                <XCircle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Offer Rejected</h4>
                <p className="text-sm text-slate-700 mb-4">
                  The surplus energy offer has been declined. The 420 kWh capacity will remain available for airport use or future market opportunities.
                </p>
                <div className="bg-white rounded-lg p-4 border border-red-200">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-900 mb-1">Alternative Options</p>
                      <p className="text-xs text-slate-600">This energy can be reserved for unexpected airport demand spikes or offered to alternative buyers.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300 animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Held for Airport Reserve</h4>
                <p className="text-sm text-slate-700 mb-4">
                  The 420 kWh surplus capacity has been reserved for potential airport use. This energy will remain available as a safety buffer for unexpected demand.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-3 border border-blue-200">
                    <div className="text-xs text-slate-600 mb-1">Reserved Capacity</div>
                    <div className="text-sm font-bold text-slate-900 font-mono">420 kWh</div>
                    <div className="text-xs text-slate-600 mt-1">Available until 22:00</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-blue-200">
                    <div className="text-xs text-slate-600 mb-1">Vehicles On Standby</div>
                    <div className="text-sm font-bold text-slate-900 font-mono">9 EVs</div>
                    <div className="text-xs text-slate-600 mt-1">Ready for discharge</div>
                  </div>
                </div>
                <div className="mt-4 bg-white rounded-lg p-3 border border-blue-200">
                  <div className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-700">If airport demand remains low, this capacity can be released to the market closer to delivery time.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Info Box */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-900">
            <strong>Marketplace priority:</strong> Only verified surplus energy is offered externally. Airport operations and vehicle readiness always take precedence.
          </p>
        </div>
      </div>
    </div>
  );
}

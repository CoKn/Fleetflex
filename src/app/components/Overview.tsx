import { Link } from "react-router";
import { Shield, Zap, TrendingUp, ArrowRight } from "lucide-react";

export default function Overview() {
  return (
    <div className="h-full bg-gradient-to-br from-slate-50 to-green-50">
      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            FleetFlex
          </h1>
          <p className="text-2xl text-slate-700 mb-2">
            Turn parked airport EVs into an energy asset
          </p>
          <p className="text-xl text-slate-600">
            Charge cheap. Power the airport. Sell the surplus.
          </p>
        </div>

        {/* Value Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Protect operations
            </h3>
            <p className="text-slate-600">
              Vehicles are always kept above required state of charge.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Reduce airport electricity costs
            </h3>
            <p className="text-slate-600">
              EV batteries power airport demand during expensive periods.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Monetize surplus energy
            </h3>
            <p className="text-slate-600">
              Remaining capacity is packaged and sold through Mainova / BKV partner.
            </p>
          </div>
        </div>

        {/* Priority Logic Banner */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Priority Logic</h3>
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 text-center">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-primary font-bold">1</span>
              </div>
              <p className="text-sm font-medium text-slate-900">Protect vehicle readiness</p>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-400" />
            <div className="flex-1 text-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-accent font-bold">2</span>
              </div>
              <p className="text-sm font-medium text-slate-900">Reduce airport electricity costs</p>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-400" />
            <div className="flex-1 text-center">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-primary font-bold">3</span>
              </div>
              <p className="text-sm font-medium text-slate-900">Sell verified surplus energy</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/fleet-readiness"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-green-600 transition-colors shadow-sm"
          >
            Open Energy Dashboard
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

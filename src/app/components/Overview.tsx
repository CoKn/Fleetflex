import { Link } from "react-router";
import { Shield, Zap, TrendingUp, ArrowRight, Battery, Leaf, BarChart3, CheckCircle, Globe } from "lucide-react";

export default function Overview() {
  return (
    <div className="h-full overflow-auto bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-50 to-green-50 py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Turn airport EV fleets into green energy buffers
            </h1>
            <p className="text-xl text-slate-700 max-w-4xl mx-auto mb-8">
              FleetFlex helps airports store renewable electricity in parked EVs, use it when airport demand peaks, and sell verified surplus green flexibility to the market.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                to="/fleet-readiness"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-green-600 transition-colors shadow-sm"
              >
                Explore the platform
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/settlement"
                className="inline-flex items-center gap-2 bg-white text-slate-700 border-2 border-gray-300 px-8 py-4 rounded-lg font-medium hover:bg-slate-50 transition-colors"
              >
                View sustainability impact
              </Link>
            </div>
          </div>

          {/* Priority Logic Flow */}
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 max-w-3xl mx-auto">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-primary font-bold text-lg">1</span>
                </div>
                <p className="text-sm font-semibold text-slate-900">Protect vehicles</p>
              </div>
              <ArrowRight className="w-6 h-6 text-primary" />
              <div className="flex-1 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-accent font-bold text-lg">2</span>
                </div>
                <p className="text-sm font-semibold text-slate-900">Power airport</p>
              </div>
              <ArrowRight className="w-6 h-6 text-primary" />
              <div className="flex-1 text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-amber-600 font-bold text-lg">3</span>
                </div>
                <p className="text-sm font-semibold text-slate-900">Sell to Mainova</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pain Points Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Airports are under pressure to prove real climate action
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Aviation reputation pressure</h3>
              <p className="text-slate-600">Flying is visibly linked to CO₂ emissions, creating public and marketing pressure for airports.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Renewable energy is already growing</h3>
              <p className="text-slate-600">Frankfurt Airport is already moving strongly toward renewable electricity, aiming for almost fully renewable electricity sourcing.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">The real challenge is timing</h3>
              <p className="text-slate-600">Solar peaks during the day, wind fluctuates, and airport demand continues at night and during operational peaks.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">EV batteries are underused</h3>
              <p className="text-slate-600">Airport EV batteries are already on-site, but without optimization they are mostly used only for mobility, not as flexible green energy storage.</p>
            </div>
          </div>
          <div className="bg-green-50 border-l-4 border-primary rounded-lg p-6">
            <p className="text-lg text-slate-800 italic">
              The question is no longer only "How do airports get green electricity?" It is "How do airports make green electricity usable when it is needed most?"
            </p>
          </div>
        </div>
      </div>

      {/* Scalability Section */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            This is not only a Frankfurt Airport problem
          </h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            Germany has over 100 airports facing similar sustainability and energy challenges. The same model can scale to logistics depots, municipal fleets, delivery fleets, and corporate campuses.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center border border-gray-200">
              <div className="text-4xl font-bold text-primary mb-2">103</div>
              <div className="text-sm text-slate-600">Airports in Germany</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border border-gray-200">
              <div className="text-4xl font-bold text-primary mb-2">Growing</div>
              <div className="text-sm text-slate-600">EV fleets</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border border-gray-200">
              <div className="text-4xl font-bold text-primary mb-2">High</div>
              <div className="text-sm text-slate-600">Energy demand</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border border-gray-200">
              <div className="text-4xl font-bold text-primary mb-2">Need</div>
              <div className="text-sm text-slate-600">Flexible storage</div>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            FleetFlex makes renewable airport energy dispatchable
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Step 1: Protect vehicles</h3>
              <p className="text-slate-600">FleetFlex checks vehicle schedules, battery state, charger status, and required state of charge.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Step 2: Power airport</h3>
              <p className="text-slate-600">The platform discharges selected EVs into airport demand during expensive or high-demand periods.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Step 3: Sell surplus</h3>
              <p className="text-slate-600">Only after airport operations are secured, verified surplus green flexibility is sold to Mainova or another market partner.</p>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <p className="text-slate-800">
              <strong>FleetFlex does not replace Fraport's renewable strategy.</strong> It makes that strategy more valuable by turning renewable electricity into flexible, storable, and marketable energy.
            </p>
          </div>
        </div>
      </div>

      {/* Platform Features Section */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            One platform for green energy optimization
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <Leaf className="w-10 h-10 text-primary mb-3" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Renewable charging optimizer</h3>
              <p className="text-sm text-slate-600">Charges vehicles when renewable-backed electricity is available or cheap.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <Shield className="w-10 h-10 text-blue-600 mb-3" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Vehicle readiness protection</h3>
              <p className="text-sm text-slate-600">Prevents discharge if a vehicle is needed for airport operations.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <Battery className="w-10 h-10 text-accent mb-3" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Airport energy buffer</h3>
              <p className="text-sm text-slate-600">Uses EV batteries to power airport demand during peak periods.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <CheckCircle className="w-10 h-10 text-primary mb-3" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Surplus detector</h3>
              <p className="text-sm text-slate-600">Identifies only the remaining verified surplus after airport needs are secured.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <Globe className="w-10 h-10 text-amber-600 mb-3" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Mainova marketplace interface</h3>
              <p className="text-sm text-slate-600">Packages surplus capacity into structured green flexibility blocks for Mainova or another energy-market partner.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <BarChart3 className="w-10 h-10 text-primary mb-3" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Impact dashboard</h3>
              <p className="text-sm text-slate-600">Tracks cost savings, surplus revenue, battery usage, and sustainability impact.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Why airports use FleetFlex
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Lower energy costs</h3>
              <p className="text-sm text-slate-600">Charge during cheap renewable-heavy periods and reduce grid purchases during expensive peaks.</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">New revenue stream</h3>
              <p className="text-sm text-slate-600">Sell verified surplus green flexibility after airport needs are covered.</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Better use of existing assets</h3>
              <p className="text-sm text-slate-600">EV batteries become both mobility assets and energy storage assets.</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Stronger sustainability story</h3>
              <p className="text-sm text-slate-600">The airport is not only buying green energy — it is storing, using, and monetizing it.</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Better public image</h3>
              <p className="text-sm text-slate-600">Position the airport as a green-energy infrastructure player, not only a high-emission transport hub.</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Zero readiness violations</h3>
              <p className="text-sm text-slate-600">Vehicle readiness violations: 0. Operations always protected.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mainova Section */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">
            Why Mainova buys the surplus
          </h2>
          <p className="text-lg text-slate-700 text-center mb-8 max-w-3xl mx-auto">
            <strong>Mainova is the energy-market partner.</strong> FleetFlex does not ask Mainova to manage individual vehicles. Instead, FleetFlex packages surplus battery capacity into clean, structured flexibility offers.
          </p>

          {/* Example Offer Card */}
          <div className="bg-white rounded-xl p-6 border-2 border-amber-300 shadow-md mb-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Surplus offer to Mainova</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-slate-600">Available energy:</span>
                <span className="font-bold text-slate-900 ml-2">420 kWh</span>
              </div>
              <div>
                <span className="text-slate-600">Delivery window:</span>
                <span className="font-bold text-slate-900 ml-2">20:00–22:00</span>
              </div>
              <div>
                <span className="text-slate-600">Source:</span>
                <span className="font-bold text-slate-900 ml-2">Renewable-backed airport EV storage</span>
              </div>
              <div>
                <span className="text-slate-600">Airport demand protected:</span>
                <span className="font-bold text-primary ml-2">Yes</span>
              </div>
              <div>
                <span className="text-slate-600">Vehicle readiness protected:</span>
                <span className="font-bold text-primary ml-2">Yes</span>
              </div>
              <div>
                <span className="text-slate-600">Status:</span>
                <span className="font-bold text-primary ml-2">Ready for market</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h4 className="font-semibold text-slate-900 mb-3">Mainova benefits:</h4>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Gets access to local renewable-backed flexibility</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Can use it for portfolio optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Can support green-energy products</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Can use it for intraday trading or balancing energy position</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Avoids dealing with unmanaged individual EVs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Make renewable airport energy flexible
          </h2>
          <p className="text-xl text-slate-700 mb-8">
            FleetFlex helps airports store green electricity in EV batteries, use it when demand peaks, and sell verified surplus flexibility to the market.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/fleet-readiness"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-green-600 transition-colors shadow-md"
            >
              See platform demo
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="inline-flex items-center gap-2 bg-white text-slate-700 border-2 border-gray-300 px-8 py-4 rounded-lg font-medium hover:bg-slate-50 transition-colors">
              Request pilot concept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

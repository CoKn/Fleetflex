import { useState } from "react";
import { toast } from "sonner";
import { Filter, Plus, X } from "lucide-react";

type Vehicle = {
  id: string;
  type: string;
  soc: number;
  required: number;
  nextTask: string;
  charger: string;
  action: string;
};

const initialVehicleData: Vehicle[] = [
  { id: "GSE-042", type: "Ground support", soc: 82, required: 55, nextTask: "04:30", charger: "Bidirectional", action: "Available" },
  { id: "BUS-011", type: "Airport bus", soc: 67, required: 70, nextTask: "02:10", charger: "Charging", action: "Protected" },
  { id: "VAN-084", type: "Service van", soc: 91, required: 60, nextTask: "06:00", charger: "Bidirectional", action: "Surplus candidate" },
  { id: "GSE-015", type: "Ground support", soc: 78, required: 50, nextTask: "05:15", charger: "Bidirectional", action: "Available" },
  { id: "BUS-023", type: "Airport bus", soc: 88, required: 65, nextTask: "07:30", charger: "Bidirectional", action: "Available" },
  { id: "VAN-056", type: "Service van", soc: 94, required: 55, nextTask: "08:00", charger: "Bidirectional", action: "Surplus candidate" },
  { id: "GSE-078", type: "Ground support", soc: 63, required: 65, nextTask: "01:45", charger: "Charging", action: "Protected" },
  { id: "BUS-034", type: "Airport bus", soc: 85, required: 70, nextTask: "06:45", charger: "Bidirectional", action: "Available" },
  { id: "VAN-092", type: "Service van", soc: 96, required: 58, nextTask: "09:00", charger: "Bidirectional", action: "Surplus candidate" },
  { id: "GSE-107", type: "Ground support", soc: 76, required: 52, nextTask: "04:00", charger: "Bidirectional", action: "Available" },
];

const filters = ["All vehicles", "Available", "Protected", "Surplus", "Charging", "Discharging"];

export default function FleetReadiness() {
  const [activeFilter, setActiveFilter] = useState("All vehicles");
  const [vehicleData, setVehicleData] = useState<Vehicle[]>(initialVehicleData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    type: "Ground support",
    soc: 80,
    required: 60,
    nextTask: "",
    charger: "Bidirectional",
  });

  const filteredData = activeFilter === "All vehicles"
    ? vehicleData
    : vehicleData.filter(v =>
        activeFilter === "Available" ? v.action === "Available" :
        activeFilter === "Protected" ? v.action === "Protected" :
        activeFilter === "Surplus" ? v.action === "Surplus candidate" :
        activeFilter === "Charging" ? v.charger === "Charging" :
        false
      );

  const getStatusColor = (action: string) => {
    if (action === "Available") return "bg-green-100 text-green-700";
    if (action === "Protected") return "bg-blue-100 text-blue-700";
    if (action === "Surplus candidate") return "bg-amber-100 text-amber-700";
    return "bg-gray-100 text-gray-700";
  };

  const handleAddVehicle = (e: React.FormEvent) => {
    e.preventDefault();

    // Determine action based on SOC vs required SOC
    let action = "Available";
    if (formData.soc < formData.required) {
      action = "Protected";
    } else if (formData.soc > formData.required + 30) {
      action = "Surplus candidate";
    }

    const newVehicle: Vehicle = {
      ...formData,
      action,
    };

    setVehicleData([...vehicleData, newVehicle]);
    setIsModalOpen(false);

    toast.success("Vehicle added successfully!", {
      description: `${formData.id} has been added to the fleet and is now ${action.toLowerCase()}.`
    });

    // Reset form
    setFormData({
      id: "",
      type: "Ground support",
      soc: 80,
      required: 60,
      nextTask: "",
      charger: "Bidirectional",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "soc" || name === "required" ? parseInt(value) : value
    }));
  };

  // Calculate dynamic KPIs
  const connectedVehicles = vehicleData.length;
  const protectedVehicles = vehicleData.filter(v => v.action === "Protected").length;
  const availableVehicles = vehicleData.filter(v => v.action === "Available").length;
  const surplusCandidates = vehicleData.filter(v => v.action === "Surplus candidate").length;
  const totalKwh = Math.round(connectedVehicles * 15.9); // Approximate 15.9 kWh per vehicle
  const availableKw = Math.round((availableVehicles + surplusCandidates) * 18.3); // Approximate 18.3 kW per vehicle

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-slate-900">
            Fleet Readiness & Battery Availability
          </h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors shadow-sm"
          >
            <Plus className="w-5 h-5" />
            Add New Vehicle
          </button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-slate-900 font-mono">{connectedVehicles}/92</div>
            <div className="text-sm text-slate-600 mt-1">EVs connected</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-blue-600 font-mono">{protectedVehicles}</div>
            <div className="text-sm text-slate-600 mt-1">Operationally protected</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-primary font-mono">{availableVehicles}</div>
            <div className="text-sm text-slate-600 mt-1">Available for airport</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-amber-600 font-mono">{surplusCandidates}</div>
            <div className="text-sm text-slate-600 mt-1">Surplus candidates</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-slate-900 font-mono">{totalKwh.toLocaleString()}</div>
            <div className="text-sm text-slate-600 mt-1">Total usable kWh</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-slate-900 font-mono">{availableKw.toLocaleString()}</div>
            <div className="text-sm text-slate-600 mt-1">Available kW</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg p-4 border border-gray-200 mb-6">
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-5 h-5 text-slate-400" />
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? "bg-primary text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Vehicle Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          {filteredData.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-slate-400 mb-2">
                <Filter className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-1">No vehicles found</h3>
              <p className="text-sm text-slate-600 mb-4">No vehicles match the current filter criteria.</p>
              <button
                onClick={() => setActiveFilter("All vehicles")}
                className="text-primary hover:text-green-600 text-sm font-medium"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">
                      Vehicle ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">
                      Current SOC
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">
                      Required SOC
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">
                      Next Task
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">
                      Charger Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">
                      Eligible Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredData.map((vehicle, index) => (
                    <tr key={vehicle.id} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-mono font-medium text-slate-900">
                        {vehicle.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700">
                        {vehicle.type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-slate-900">
                        {vehicle.soc}%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-slate-900">
                        {vehicle.required}%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-slate-700">
                        {vehicle.nextTask}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700">
                        {vehicle.charger}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(vehicle.action)}`}>
                          {vehicle.action}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Info Banner */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-900">
            <strong>FleetFlex protection:</strong> No vehicle is used for energy services unless it maintains readiness for its next airport task.
          </p>
        </div>
      </div>

      {/* Add Vehicle Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-slate-900">Add New Vehicle to Fleet</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleAddVehicle} className="p-6 space-y-6">
              {/* Vehicle ID */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Vehicle ID *
                </label>
                <input
                  type="text"
                  name="id"
                  required
                  value={formData.id}
                  onChange={handleInputChange}
                  placeholder="e.g., GSE-120, BUS-045, VAN-098"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Vehicle Type */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Vehicle Type *
                </label>
                <select
                  name="type"
                  required
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="Ground support">Ground support</option>
                  <option value="Airport bus">Airport bus</option>
                  <option value="Service van">Service van</option>
                  <option value="Cargo transport">Cargo transport</option>
                  <option value="Passenger shuttle">Passenger shuttle</option>
                </select>
              </div>

              {/* Current SOC and Required SOC */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Current State of Charge (%)
                  </label>
                  <input
                    type="number"
                    name="soc"
                    required
                    min="0"
                    max="100"
                    value={formData.soc}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <div className="mt-2">
                    <input
                      type="range"
                      name="soc"
                      min="0"
                      max="100"
                      value={formData.soc}
                      onChange={handleInputChange}
                      className="w-full accent-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Required SOC for Next Task (%)
                  </label>
                  <input
                    type="number"
                    name="required"
                    required
                    min="0"
                    max="100"
                    value={formData.required}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <div className="mt-2">
                    <input
                      type="range"
                      name="required"
                      min="0"
                      max="100"
                      value={formData.required}
                      onChange={handleInputChange}
                      className="w-full accent-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Next Task Time */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Next Scheduled Task (HH:MM) *
                </label>
                <input
                  type="time"
                  name="nextTask"
                  required
                  value={formData.nextTask}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Charger Status */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Charger Type *
                </label>
                <select
                  name="charger"
                  required
                  value={formData.charger}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="Bidirectional">Bidirectional (V2G capable)</option>
                  <option value="Charging">Unidirectional (Charging only)</option>
                  <option value="Disconnected">Not connected</option>
                </select>
              </div>

              {/* Status Preview */}
              <div className="bg-slate-50 rounded-lg p-4 border border-gray-200">
                <h4 className="text-sm font-medium text-slate-700 mb-2">Status Preview</h4>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-600">Vehicle will be classified as:</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    formData.soc < formData.required
                      ? "bg-blue-100 text-blue-700"
                      : formData.soc > formData.required + 30
                      ? "bg-amber-100 text-amber-700"
                      : "bg-green-100 text-green-700"
                  }`}>
                    {formData.soc < formData.required
                      ? "Protected (needs charging)"
                      : formData.soc > formData.required + 30
                      ? "Surplus candidate"
                      : "Available"}
                  </span>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex gap-3 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-green-600 transition-colors shadow-sm"
                >
                  Add Vehicle to Fleet
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

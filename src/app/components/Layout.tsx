import { Link, Outlet, useLocation } from "react-router";
import { Toaster } from "sonner";
import {
  LayoutDashboard,
  Gauge,
  Calendar,
  Battery,
  TrendingUp,
  FileText,
  Settings,
  Zap
} from "lucide-react";

const navItems = [
  { path: "/", label: "Overview", icon: LayoutDashboard },
  { path: "/fleet-readiness", label: "Fleet Readiness", icon: Gauge },
  { path: "/day-ahead", label: "Day-Ahead Plan", icon: Calendar },
  { path: "/airport-buffer", label: "Airport Energy Buffer", icon: Battery },
  { path: "/surplus-marketplace", label: "Surplus Marketplace", icon: TrendingUp },
  { path: "/settlement", label: "Settlement", icon: FileText },
];

export default function Layout() {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-slate-900">FleetFlex</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
                  ${isActive
                    ? "bg-green-50 text-primary"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }
                `}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Settings */}
        <div className="p-4 border-t border-gray-200">
          <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors w-full">
            <Settings className="w-5 h-5" />
            <span className="text-sm font-medium">Settings</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>

      {/* Toast Notifications */}
      <Toaster position="top-right" richColors />
    </div>
  );
}

import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Overview from "./components/Overview";
import FleetReadiness from "./components/FleetReadiness";
import DayAheadPlan from "./components/DayAheadPlan";
import AirportBuffer from "./components/AirportBuffer";
import SurplusMarketplace from "./components/SurplusMarketplace";
import Settlement from "./components/Settlement";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Overview },
      { path: "fleet-readiness", Component: FleetReadiness },
      { path: "day-ahead", Component: DayAheadPlan },
      { path: "airport-buffer", Component: AirportBuffer },
      { path: "surplus-marketplace", Component: SurplusMarketplace },
      { path: "settlement", Component: Settlement },
    ],
  },
]);

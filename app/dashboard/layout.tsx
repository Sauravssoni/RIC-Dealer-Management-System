import DashboardBoot from "./DashboardBoot";
import DashboardAlerts from "./DashboardAlerts";
import "./dashboard.css";
import "./boot.css";
import "./dashboard-alerts.css";

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <DashboardBoot>{children}<DashboardAlerts /></DashboardBoot>;
}

import DashboardBoot from "./DashboardBoot";
import DashboardAlerts from "./DashboardAlerts";
import DashboardProgramme from "./DashboardProgramme";
import "./dashboard.css";
import "./boot.css";
import "./dashboard-alerts.css";
import "./programme.css";
import "./map-pro.css";

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <DashboardBoot>{children}<DashboardProgramme /><DashboardAlerts /></DashboardBoot>;
}

import DashboardBoot from "./DashboardBoot";
import "./dashboard.css";
import "./boot.css";

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <DashboardBoot>{children}</DashboardBoot>;
}

import DashboardBoot from "./DashboardBoot";
import EvaluatorConsole from "./EvaluatorConsole";
import "./dashboard.css";
import "./boot.css";
import "./evaluator-console.css";
import "./evaluator-proof.css";
import "./map-pro.css";
import "./submission-polish.css";

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <DashboardBoot>{children}<EvaluatorConsole /></DashboardBoot>;
}

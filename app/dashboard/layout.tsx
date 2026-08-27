import DashboardBoot from "./DashboardBoot";
import EvaluatorConsole from "./EvaluatorConsole";
import PrototypeLaunchBar from "./PrototypeLaunchBar";
import RajasthanSystemContext from "./RajasthanSystemContext";
import "./dashboard.css";
import "./boot.css";
import "./evaluator-console.css";
import "./evaluator-proof.css";
import "./map-pro.css";
import "./submission-polish.css";
import "./prototype-launch.css";
import "./rajasthan-system-context.css";

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <DashboardBoot>{children}<PrototypeLaunchBar /><RajasthanSystemContext /><EvaluatorConsole /></DashboardBoot>;
}

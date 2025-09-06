import type { JSX } from "react";
import DailyIntakeCalc from "../components/waterIntake/dailyIntakeCalc.tsx";
import { useWaterContext } from "../contexts/waterContext.tsx";
import DailyIntakeCalcResult from "../components/waterIntake/dailyIntakeCalcResult.tsx";

function Calc() {
  const { page } = useWaterContext();
  const lookup: Record<number, JSX.Element> = {
    0: <DailyIntakeCalc />,
    1: <DailyIntakeCalcResult />,
  };
  return <>{lookup[page]}</>;
}
export default Calc;

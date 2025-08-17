import type { JSX } from "react";
import BSA from "./components/bsa.tsx";
import { useWaterContext } from "./contexts/waterContext.tsx";
import DailyWaterIntake from "./components/dailyWaterIntake.tsx";

function App() {
  const { page } = useWaterContext();
  const lookup: Record<number, JSX.Element> = {
    0: <BSA />,
    1: <DailyWaterIntake />,
  };
  return lookup[page];
}
export default App;

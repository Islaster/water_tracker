import { useWaterContext } from "../contexts/waterContext";
import { dailyWaterIntakeFormula } from "../ultilites/dailyWaterIntakeFormula";

export default function DailyWaterIntake() {
  const { bodyState } = useWaterContext();

  const waterIntake = dailyWaterIntakeFormula(
    bodyState.height,
    bodyState.weight
  );
  return <>your intake for today is {waterIntake}L</>;
}

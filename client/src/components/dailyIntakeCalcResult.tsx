import { useWaterContext } from "../contexts/waterContext";
import { dailyWaterIntakeFormula } from "../ultilites/dailyWaterIntakeFormula";
import { useState, useEffect } from "react";

export default function DailyIntakeCalcResult() {
  const { bodyState, changeUnit } = useWaterContext();
  const [unit, setUnit] = useState("L");

  function handleClick() {
    fetch("http://localhost:3001/api/add/waterentry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: Number(parseFloat(waterIntake).toFixed(1)),
        unit: unit,
      }),
    });
  }

  // Update unit when changeUnit changes
  useEffect(() => {
    setUnit(changeUnit ? "L" : "OZ");
  }, [changeUnit]);

  const waterIntake = dailyWaterIntakeFormula(
    bodyState.height,
    bodyState.weight,
    changeUnit
  );

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-2xl shadow-lg border border-blue-100 text-center">
      <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">
        💧 Today's Water Intake
      </h2>

      <div className="text-4xl sm:text-5xl font-bold text-blue-500 mb-2">
        {parseInt(waterIntake).toFixed(1)} {unit}
      </div>

      <p className="text-gray-600 mb-6">
        Keep yourself hydrated! Track your daily intake.
      </p>

      <button
        onClick={() => handleClick}
        className="px-6 py-2 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transition"
      >
        Log Water
      </button>
    </div>
  );
}

import { useWaterContext } from "../contexts/waterContext";
import { useState, useEffect } from "react";

export default function BSA() {
  const [unit, setUnit] = useState({ main: "m", sub: "cm", weight: "kg" });
  const { updateBodyState, setPage, page, changeUnit, setChangeUnit } =
    useWaterContext();

  useEffect(() => {
    setUnit(
      changeUnit
        ? { main: "m", sub: "cm", weight: "kg" }
        : { main: "ft", sub: "in", weight: "lbs" }
    );
  }, [changeUnit]);

  const [measurements, setMeasurements] = useState({
    height: { main: 0, sub: 0 },
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (changeUnit) {
      const m = measurements.height.main * 100;
      updateBodyState("height", m + measurements.height.sub);
    } else {
      const ft = measurements.height.main * 12;
      updateBodyState("height", ft + measurements.height.sub);
    }
    setPage(page + 1);
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10 border border-blue-100">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4 text-center">
        Water Tracker Setup
      </h2>

      <button
        onClick={() => setChangeUnit(!changeUnit)}
        className="mb-6 w-full px-4 py-2 bg-blue-100 text-blue-700 font-medium rounded-full hover:bg-blue-200 transition"
      >
        Switch to {changeUnit ? "Imperial" : "Metric"}
      </button>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Height main */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
          <label className="w-full sm:w-1/3 text-gray-700 font-medium">
            Height ({unit.main})
          </label>
          <input
            type="number"
            className="w-full sm:w-2/3 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
            onChange={(e) =>
              setMeasurements((prev) => ({
                ...prev,
                height: { ...prev.height, main: parseInt(e.target.value) },
              }))
            }
          />
        </div>

        {/* Height sub */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
          <label className="w-full sm:w-1/3 text-gray-700 font-medium">
            Height ({unit.sub})
          </label>
          <input
            type="number"
            className="w-full sm:w-2/3 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
            onChange={(e) =>
              setMeasurements((prev) => ({
                ...prev,
                height: { ...prev.height, sub: parseInt(e.target.value) },
              }))
            }
          />
        </div>

        {/* Weight */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
          <label className="w-full sm:w-1/3 text-gray-700 font-medium">
            Weight ({unit.weight})
          </label>
          <input
            type="number"
            className="w-full sm:w-2/3 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
            onChange={(e) =>
              updateBodyState("weight", parseInt(e.target.value))
            }
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition"
        >
          Estimate Water Intake
        </button>
      </form>
    </div>
  );
}

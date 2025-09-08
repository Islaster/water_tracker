import { useWaterContext } from "../../../contexts/waterContext";
import { useState, useEffect } from "react";

export default function MiniCalc() {
  const { updateBodyState, setPage, page, changeUnit, setChangeUnit, unit } =
    useWaterContext();

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
    <div className="w-full max-w-xs mx-auto p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-blue-200">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">
        BSA Calculator
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Height Main */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">
            Height ({unit.main})
          </label>
          <input
            type="number"
            className="mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) =>
              setMeasurements((prev) => ({
                ...prev,
                height: { ...prev.height, main: parseInt(e.target.value) },
              }))
            }
          />
        </div>

        {/* Height Sub */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">
            Height ({unit.sub})
          </label>
          <input
            type="number"
            className="mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) =>
              setMeasurements((prev) => ({
                ...prev,
                height: { ...prev.height, sub: parseInt(e.target.value) },
              }))
            }
          />
        </div>

        {/* Weight */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">
            Weight ({unit.weight})
          </label>
          <input
            type="number"
            className="mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) =>
              updateBodyState("weight", parseInt(e.target.value))
            }
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full mt-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
        >
          Estimate
        </button>
      </form>

      {/* Unit Switch */}
      <button
        type="button"
        onClick={() => setChangeUnit(!changeUnit)}
        className="mt-3 w-full py-2 text-blue-700 font-medium hover:underline text-sm"
      >
        Switch to {changeUnit ? "Imperial" : "Metric"}
      </button>
    </div>
  );
}

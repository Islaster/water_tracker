import { useUserContext } from "../../../contexts/userContext";
import { useWaterContext } from "../../../contexts/waterContext";
import { useState } from "react";

type WaterLogEntry = {
  user_id: number | undefined;
  amount: number;
  unit: string;
};

export default function MiniLogWater() {
  const [amount, setAmount] = useState(0);

  const { changeUnit } = useWaterContext();

  const user = localStorage.getItem("user");
  console.log(user);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const body: WaterLogEntry = {
      user_id: undefined,
      amount: 0,
      unit: "",
    };

    if (user) {
      body.user_id = parseInt(user);
      body.amount = amount;
      body.unit = changeUnit ? "ml" : "oz";
    } else {
      body.amount = amount;
      body.unit = changeUnit ? "ml" : "oz";
    }

    e.preventDefault();
    await fetch("http://localhost:3001/api/water/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  return (
    <div className="w-full max-w-xs mx-auto p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-blue-200">
      <h2 className="text-xl font-bold text-center text-blue-700 mb-4">
        Log Water
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Water Input */}
        <div className="flex flex-col">
          <label htmlFor="water" className="text-sm font-medium text-gray-700">
            Water Intake ({changeUnit ? "ml" : "oz"})
          </label>
          <input
            type="number"
            name="water"
            id="water"
            onChange={(evt) => setAmount(parseInt(evt.target.value))}
            className="mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
        >
          Log
        </button>
      </form>
    </div>
  );
}

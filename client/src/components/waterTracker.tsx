import { useState } from "react";
import { useWaterContext } from "../contexts/waterContext";

export default function waterTracker() {
  const [log, setLog] = useState({ water: 0, date: Date.now() });
  const [unit, setUnit] = useState("L");
  function handleSubmit() {
    fetch("http://localhost:3001/api/add/waterentry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ log }),
    });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">water intake:</label>
        <input
          type="number"
          onChange={(e) =>
            setLog((prev) => ({ ...prev, ["water"]: parseInt(e.target.value) }))
          }
        />
        {unit}
      </form>
    </>
  );
}

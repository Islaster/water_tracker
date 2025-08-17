import { useWaterContext } from "../contexts/waterContext";

export default function BSA() {
  const { updateBodyState, setPage, page } = useWaterContext();
  return (
    <>
      <label htmlFor="height">Height</label>
      <input
        type="number"
        onChange={(e) => updateBodyState("height", parseInt(e.target.value))}
      />
      <label htmlFor="weight">Weight</label>
      <input
        type="number"
        onChange={(e) => updateBodyState("weight", parseInt(e.target.value))}
      />
      <button onClick={() => setPage(page + 1)}>estimate</button>
    </>
  );
}

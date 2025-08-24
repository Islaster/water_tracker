import { useWaterContext } from "../contexts/waterContext";

export default function Navbar() {
  const { setChangeUnit, changeUnit } = useWaterContext();

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="text-xl font-bold text-blue-600">💧 Water Tracker</div>

        <button
          onClick={() => setChangeUnit(!changeUnit)}
          className="px-4 py-2 bg-blue-100 text-blue-700 font-medium rounded-full hover:bg-blue-200 transition"
        >
          {changeUnit ? "Switch to Imperial" : "Switch to Metric"}
        </button>
      </div>
    </nav>
  );
}

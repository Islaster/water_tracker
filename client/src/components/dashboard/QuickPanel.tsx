import MiniCalc from "./quickPanel/calc";
import MiniLogWater from "./quickPanel/logWater";

export default function QuickPanel() {
  return (
    <div className="p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-blue-200 space-y-6">
      <h2 className="text-2xl font-bold text-blue-700 text-center">
        Quick Actions
      </h2>
      {/* BSA Mini Calculator */}
      <div className="space-y-4">
        <MiniCalc />
      </div>

      {/* Mini Water Log */}
      <div className="space-y-4">
        <MiniLogWater />
      </div>
    </div>
  );
}

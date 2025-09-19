import Chart from "./statsPanel/chart";
import LogHistory from "./statsPanel/logHistory";

export default function StatsPanel() {
  return (
    <div className="p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-blue-200 space-y-6">
      <h2 className="text-2xl font-bold text-blue-700 text-center">
        Historical Stats
      </h2>

      {/* Chart */}
      <div className="h-64 bg-gray-100 rounded-lg">
        <Chart />
      </div>

      {/* Table */}
      <LogHistory />
    </div>
  );
}

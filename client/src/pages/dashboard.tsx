import QuickPanel from "../components/dashboard/QuickPanel"; // BSA + mini log
import StatsPanel from "../components/dashboard/StatsPanel"; // Historical charts/tables

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Water Tracker Dashboard
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Left Panel: Quick actions */}
        <QuickPanel />

        {/* Right Panel: Historical stats */}
        <StatsPanel />
      </div>
    </div>
  );
}

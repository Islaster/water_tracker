export default function StatsPanel() {
  return (
    <div className="p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-blue-200 space-y-6">
      <h2 className="text-2xl font-bold text-blue-700 text-center">
        Historical Stats
      </h2>

      {/* Chart */}
      <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
        {/* Replace with chart component */}
        <span className="text-gray-400">Chart goes here</span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-blue-100">
            <tr>
              <th className="px-4 py-2 text-left text-gray-700">Date</th>
              <th className="px-4 py-2 text-left text-gray-700">Water (ml)</th>
              <th className="px-4 py-2 text-left text-gray-700">BSA (m²)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-4 py-2">Aug 24</td>
              <td className="px-4 py-2">1500</td>
              <td className="px-4 py-2">1.8</td>
            </tr>
            {/* Add more rows dynamically */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

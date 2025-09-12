import { useEffect } from "react";

export default function LogHistory() {
  useEffect(() => {
    //search database for users water logs
  }, []);

  return (
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
  );
}

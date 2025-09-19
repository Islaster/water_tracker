import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { monthLookup } from "../../../assets/lookups";
import { useUserContext } from "../../../contexts/userContext";

type ResultType = {
  id: number;
  amount: number;
  created_at: string;
  unit: string;
};

export default function LogHistory() {
  const { userState } = useUserContext();
  const [log, setLog] = useState<ResultType[]>([]);
  useEffect(() => {
    const socket = io("http://localhost:3001");

    socket.on("connect", () => {
      console.log("🎉 Connected to server:", socket.id);
      socket.emit("waterLogs", { user_id: localStorage.getItem("user") });
    });
    socket.on("waterLogs", (entries) => {
      console.log("entries");
      console.log(entries);
      setLog(entries);
    });

    // cleanup
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead className="bg-blue-100">
          <tr>
            <th className="px-4 py-2 text-left text-gray-700">Date</th>
            <th className="px-4 py-2 text-left text-gray-700">Water (ml)</th>
          </tr>
        </thead>
        <tbody>
          {log?.length > 0 ? (
            log.map((l) => (
              <tr key={l.id} className="border-t">
                <td className="px-4 py-2">
                  {`${
                    monthLookup[
                      l.created_at.split("-")[1] as keyof typeof monthLookup
                    ]
                  } ${l.created_at.split("-")[2].split("T")[0]}`}
                </td>
                <td className="px-4 py-2">{l.amount}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="px-4 py-6 text-center text-gray-500">
                No data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

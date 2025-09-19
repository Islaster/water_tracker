import { useEffect, useState } from "react";
import { monthLookup } from "../../../assets/lookups";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Scatter,
} from "recharts";

type ResultType = {
  id: number;
  amount: number;
  user_id: number;
  created_at: string;
  unit: string;
};

export default function Chart() {
  const [data, setData] = useState<{ name: string; amount: number }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3001/api/waters");
      const result: ResultType[] = await res.json();

      const preData = result
        .map((r) => {
          const [year, month, dayRaw] = r.created_at.split("-");
          const day = parseInt(dayRaw.slice(0, 2), 10);
          return {
            name: `${monthLookup[month as keyof typeof monthLookup]} ${day}`,
            amount: r.amount,
            date: Date.parse(r.created_at),
          };
        })
        .sort((a, b) => a.date - b.date);

      setData(preData);
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-64 flex items-center justify-center bg-white border border-gray-200 rounded-lg">
      {data.length === 0 ? (
        <span className="text-gray-500">No data</span>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              type="number"
              scale="time"
              domain={["auto", "auto"]}
              tickFormatter={(v) =>
                new Date(v as number).toLocaleString(undefined, {
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })
              }
            />
            <YAxis />
            <Tooltip
              labelFormatter={(v) =>
                new Date(v as number).toLocaleString(undefined, {
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })
              }
              formatter={(val, _name, p) => [
                `${val}${p?.payload?.unit ? ` ${p.payload.unit}` : ""}`,
                "amount",
              ]}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#8884d8"
              strokeWidth={2}
              dot={{
                r: 4, // radius
                stroke: "#8884d8", // border color
                strokeWidth: 2, // border thickness
              }}
              activeDot={{
                r: 6,
                fill: "#8884d8",
                stroke: "#fff",
                strokeWidth: 2,
              }}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

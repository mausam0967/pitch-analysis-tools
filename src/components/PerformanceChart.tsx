import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { match: "Match 1", performance: 65 },
  { match: "Match 2", performance: 75 },
  { match: "Match 3", performance: 70 },
  { match: "Match 4", performance: 85 },
  { match: "Match 5", performance: 80 },
];

export const PerformanceChart = () => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="match" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="performance" stroke="#4a6fa5" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Dummy weekly and monthly data
const weeklyData = [
  { name: "Mon", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Tue", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Wed", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Thu", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Fri", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Sat", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Sun", uv: 3490, pv: 4300, amt: 2100 },
];

const monthlyData = [
  { name: "Jan", uv: 5000, pv: 3400, amt: 2400 },
  { name: "Feb", uv: 4200, pv: 2398, amt: 2210 },
  { name: "Mar", uv: 3200, pv: 7800, amt: 2290 },
  { name: "Apr", uv: 3980, pv: 5908, amt: 2000 },
  { name: "May", uv: 2890, pv: 6800, amt: 2181 },
  { name: "Jun", uv: 3390, pv: 5800, amt: 2500 },
  { name: "Jul", uv: 4490, pv: 6300, amt: 2100 },
];

export default function OrderInsightsCard() {
  const [chartData, setChartData] = useState(weeklyData);
  const [viewMode, setViewMode] = useState("Weekly");

  const handleToggleView = () => {
    if (viewMode === "Weekly") {
      setViewMode("Monthly");
      setChartData(monthlyData);
    } else {
      setViewMode("Weekly");
      setChartData(weeklyData);
    }
  };

  return (
    <div className="p-6 rounded-lg w-full overflow-x-auto bg-white">
      <div className="flex justify-between items-center mb-6 min-w-[400px]">
        <h2 className="text-xl text-black">Bidding Amount</h2>
        <Button
          variant="outline"
          onClick={handleToggleView}
          className="text-white bg-primary border-primary"
        >
          {viewMode}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="h-[400px] w-full min-w-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={300} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

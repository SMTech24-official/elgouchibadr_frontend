"use client";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "#00B1FF",
  },
  safari: {
    label: "Safari",
    color: "#0489c4",
  },
  firefox: {
    label: "Firefox",
    color: "#2ebfff",
  },
  edge: {
    label: "Edge",
    color: "#3583a6",
  },
  other: {
    label: "Other",
    color: "#1694cc",
  },
} satisfies ChartConfig;

export function CircleChart() {
  return (
    <div>
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Reports and Analytics
        </h2>
        <p className="text-gray-700 mb-4">
          Get a detailed breakdown of sales by auction type, time frame, and
          region. View monthly, quarterly, or yearly revenue trends.
        </p>
      </section>

      <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
          <CardTitle>Pie Chart - Donut</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="visitors"
                nameKey="browser"
                innerRadius={60}
              />
            </PieChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing total visitors for the last 6 months
          </div>
        </CardFooter>

       <div className="p-2">
         <Table >
          <TableHeader className="bg-primary text-white rounded-md">
            <TableRow className="hover:bg-primary/90">
              <TableHead className="text-white">Auction Type</TableHead>
              <TableHead className="text-white">Total Auction</TableHead>
              <TableHead className="text-white">Successfull Auction</TableHead>
              <TableHead className="text-white">Canceled Auction</TableHead>
              <TableHead className="text-white">Success Rate (%)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-black">
            <TableRow className="bg-primary/5 hover:bg-primary/1">
              <TableCell>Sedan</TableCell>
              <TableCell>150</TableCell>
              <TableCell>39</TableCell>
              <TableCell>12</TableCell>
              <TableCell>95%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
       </div>
      </Card>
    </div>
  );
}

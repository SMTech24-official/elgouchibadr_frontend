import { statsData } from "@/types/fakeDashboardData";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function OrderStatistics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {statsData.map((stat) => (
        <Card
          key={stat.id}
          className={`${stat.bgColor} ${stat.hoverColor} cursor-pointer rounded-[13px] text-center bg-white text-black transition-colors duration-200`}
        >
          <CardHeader className=" pb-2 space-y-0">
            <CardTitle className="text-[36px] font-medium">
              {stat.value.toLocaleString()}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-1">
              <div className="text-2xl">{stat.title}</div>
              {stat.description && (
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

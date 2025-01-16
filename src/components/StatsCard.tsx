import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: "up" | "down";
  trendValue?: string;
}

export const StatsCard = ({ title, value, icon, trend, trendValue }: StatsCardProps) => {
  return (
    <Card className="bg-[#222632] border-none hover:bg-[#2A2F3C] transition-colors">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-400">
          {title}
        </CardTitle>
        <div className="p-2 bg-[#2A2F3C] rounded-lg">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-white">{value}</div>
        {trend && trendValue && (
          <p className={`text-xs ${trend === "up" ? "text-green-400" : "text-red-400"} mt-1`}>
            {trend === "up" ? "↑" : "↓"} {trendValue}
          </p>
        )}
      </CardContent>
    </Card>
  );
};
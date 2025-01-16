import { Trophy, Users, TrendingUp, Activity } from "lucide-react";
import { StatsCard } from "@/components/StatsCard";
import { PerformanceChart } from "@/components/PerformanceChart";
import { RecentMatches } from "@/components/RecentMatches";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-4xl font-bold text-primary mb-8">Team Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total Wins"
          value="15"
          icon={<Trophy className="h-4 w-4 text-secondary" />}
          trend="up"
          trendValue="+2 vs last month"
        />
        <StatsCard
          title="Squad Size"
          value="25"
          icon={<Users className="h-4 w-4 text-secondary" />}
        />
        <StatsCard
          title="Form"
          value="75%"
          icon={<TrendingUp className="h-4 w-4 text-secondary" />}
          trend="up"
          trendValue="+5% vs last month"
        />
        <StatsCard
          title="Fitness Level"
          value="85%"
          icon={<Activity className="h-4 w-4 text-secondary" />}
          trend="down"
          trendValue="-2% vs last month"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-card p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Performance Trend</h2>
          <PerformanceChart />
        </div>
        <RecentMatches />
      </div>
    </div>
  );
};

export default Index;
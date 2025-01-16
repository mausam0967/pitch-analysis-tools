import React from 'react';
import { Card } from "@/components/ui/card";
import { PerformanceChart } from "@/components/PerformanceChart";
import { RecentMatches } from "@/components/RecentMatches";
import { StatsCard } from "@/components/StatsCard";

const Dashboard = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-primary mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatsCard 
          title="Goals" 
          value="12" 
          icon={<span>⚽</span>}
          trend="up" 
          trendValue="+2" 
        />
        <StatsCard 
          title="Assists" 
          value="8" 
          icon={<span>👟</span>}
          trend="up" 
          trendValue="+1" 
        />
        <StatsCard 
          title="Clean Sheets" 
          value="5" 
          icon={<span>🥅</span>}
          trend="down" 
          trendValue="0" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Performance Trends</h2>
          <PerformanceChart />
        </Card>
        
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Matches</h2>
          <RecentMatches />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
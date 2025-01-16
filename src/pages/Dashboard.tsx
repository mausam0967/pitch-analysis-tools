import React from 'react';
import { Card } from "@/components/ui/card";
import { PerformanceChart } from "@/components/PerformanceChart";
import { RecentMatches } from "@/components/RecentMatches";
import { StatsCard } from "@/components/StatsCard";
import { Activity, Trophy, Users } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Football Live
          </h1>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
              New Match
            </button>
          </div>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard 
            title="Goals" 
            value="12" 
            icon={<Trophy className="w-5 h-5 text-blue-400" />}
            trend="up" 
            trendValue="+2" 
          />
          <StatsCard 
            title="Assists" 
            value="8" 
            icon={<Users className="w-5 h-5 text-purple-400" />}
            trend="up" 
            trendValue="+1" 
          />
          <StatsCard 
            title="Clean Sheets" 
            value="5" 
            icon={<Activity className="w-5 h-5 text-green-400" />}
            trend="down" 
            trendValue="0" 
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-[#222632] border-none p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Performance Trends</h2>
            <PerformanceChart />
          </Card>
          
          <Card className="bg-[#222632] border-none">
            <h2 className="text-xl font-semibold text-white p-6 pb-4">Recent Matches</h2>
            <RecentMatches />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";
import { Skeleton } from "@/components/ui/skeleton";

type Match = {
  id: string;
  homeTeam: { name: string };
  awayTeam: { name: string };
  score: {
    fullTime: {
      home: number;
      away: number;
    };
  };
  utcDate: string;
};

export const RecentMatches = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchFootballMatches = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('fetch-football-matches');
        
        if (error) throw error;
        
        // Take only the first 5 matches from the response
        const recentMatches = data.matches?.slice(0, 5) || [];
        setMatches(recentMatches);
      } catch (error) {
        console.error('Error fetching football matches:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFootballMatches();
  }, []);

  const getMatchResult = (homeScore: number, awayScore: number) => {
    if (homeScore > awayScore) return "W";
    if (homeScore < awayScore) return "L";
    return "D";
  };

  if (isLoading) {
    return (
      <CardContent>
        <div className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-[#1A1F2C] rounded-lg">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[100px]" />
            </div>
          ))}
        </div>
      </CardContent>
    );
  }

  return (
    <CardContent>
      <div className="space-y-4">
        {matches.length === 0 ? (
          <div className="text-center text-gray-400 py-4">
            No matches found
          </div>
        ) : (
          matches.map((match) => {
            const homeScore = match.score.fullTime.home;
            const awayScore = match.score.fullTime.away;
            const result = getMatchResult(homeScore, awayScore);
            
            return (
              <div
                key={match.id}
                className="flex items-center justify-between p-4 bg-[#1A1F2C] rounded-lg hover:bg-[#2A2F3C] transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-400">
                    {new Date(match.utcDate).toLocaleDateString()}
                  </span>
                  <span className="font-medium text-white">
                    {match.homeTeam.name} vs {match.awayTeam.name}
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="font-bold text-white">
                    {homeScore}-{awayScore}
                  </span>
                  <span
                    className={`px-2 py-1 rounded text-xs font-bold ${
                      result === "W"
                        ? "bg-green-500/20 text-green-400"
                        : result === "L"
                        ? "bg-red-500/20 text-red-400"
                        : "bg-gray-500/20 text-gray-400"
                    }`}
                  >
                    {result}
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </CardContent>
  );
};
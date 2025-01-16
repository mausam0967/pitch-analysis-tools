import { Card, CardContent } from "@/components/ui/card";

const matches = [
  { date: "2024-02-20", home: "Team A", away: "Team B", score: "2-1", result: "W" },
  { date: "2024-02-15", home: "Team C", away: "Team A", score: "0-2", result: "W" },
  { date: "2024-02-10", home: "Team A", away: "Team D", score: "1-1", result: "D" },
];

export const RecentMatches = () => {
  return (
    <CardContent>
      <div className="space-y-4">
        {matches.map((match, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-[#1A1F2C] rounded-lg hover:bg-[#2A2F3C] transition-colors"
          >
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">{match.date}</span>
              <span className="font-medium text-white">
                {match.home} vs {match.away}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-bold text-white">{match.score}</span>
              <span
                className={`px-2 py-1 rounded text-xs font-bold ${
                  match.result === "W"
                    ? "bg-green-500/20 text-green-400"
                    : match.result === "L"
                    ? "bg-red-500/20 text-red-400"
                    : "bg-gray-500/20 text-gray-400"
                }`}
              >
                {match.result}
              </span>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  );
};
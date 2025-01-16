import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const matches = [
  { date: "2024-02-20", home: "Team A", away: "Team B", score: "2-1", result: "W" },
  { date: "2024-02-15", home: "Team C", away: "Team A", score: "0-2", result: "W" },
  { date: "2024-02-10", home: "Team A", away: "Team D", score: "1-1", result: "D" },
];

export const RecentMatches = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Matches</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {matches.map((match, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">{match.date}</span>
                <span className="font-medium">
                  {match.home} vs {match.away}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-bold">{match.score}</span>
                <span
                  className={`px-2 py-1 rounded text-xs font-bold ${
                    match.result === "W"
                      ? "bg-success text-white"
                      : match.result === "L"
                      ? "bg-warning text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {match.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
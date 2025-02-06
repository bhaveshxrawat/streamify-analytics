import { Card } from "@/components/ui/card";
import { LineChart } from "lucide-react";
import {
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const mockUserGrowthTrends = {
  daily: {
    signups: 45,
    trend: "+12%",
    activeUsers: 820,
    activeTrend: "+8%",
  },
  weekly: {
    signups: 315,
    trend: "+15%",
    activeUsers: 5740,
    activeTrend: "+10%",
  },
  monthly: {
    signups: 1260,
    trend: "+20%",
    activeUsers: 22960,
    activeTrend: "+18%",
  },
};

const UserGrowthTrend = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">User Growth</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={mockUserGrowthTrends}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
            <XAxis dataKey="name" stroke="#64748B" />
            <YAxis stroke="#64748B" />
            <Tooltip
              contentStyle={{
                background: "rgba(255, 255, 255, 0.8)",
                border: "none",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              }}
            />
            <Line
              type="monotone"
              dataKey="totalUsers"
              stroke="#FB7185"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="activeUsers"
              stroke="#64748B"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default UserGrowthTrend;

import { DollarSign, Music, TrendingUp, Trophy, Users } from "lucide-react";
import GridWrapper from "@/components/GridWrapper";
import { MetricCard } from "./MetricCard";

const mockMetrics = {
  totalUsers: "1.2M",
  activeUsers: "850K",
  totalStreams: "4.5M",
  revenue: "$2.8M",
  topArtist: "Taylor Swift",
};

const OverviewMetrics = () => {
  return (
    <GridWrapper className="grid-cols-[repeat(auto-fit,_minmax(17.5rem,_1fr))] gap-6 mb-8">
      <MetricCard
        title="Total Users"
        value={mockMetrics.totalUsers}
        icon={<Users className="w-5 h-5" />}
        trend={{ value: 12, isPositive: true }}
      />
      <MetricCard
        title="Active Users"
        value={mockMetrics.activeUsers}
        icon={<TrendingUp className="w-5 h-5" />}
        trend={{ value: 8, isPositive: true }}
      />
      <MetricCard
        title="Total Streams"
        value={mockMetrics.totalStreams}
        icon={<Music className="w-5 h-5" />}
        trend={{ value: 15, isPositive: true }}
      />
      <MetricCard
        title="Revenue"
        value={mockMetrics.revenue}
        icon={<DollarSign className="w-5 h-5" />}
        trend={{ value: 5, isPositive: true }}
      />
      <MetricCard
        title="Top Artist"
        value={mockMetrics.topArtist}
        icon={<Trophy className="w-5 h-5" />}
      />
    </GridWrapper>
  );
};

export default OverviewMetrics;

import {
  RevenueChart,
  TopSongsChart,
  UserGrowthChart,
} from "@/tabs/Overview/components/Chart/Charts";
import GridWrapper from "@/components/GridWrapper";

const mockUserGrowthData = [
  { name: "Jan", totalUsers: 1000, activeUsers: 800 },
  { name: "Feb", totalUsers: 1200, activeUsers: 1000 },
  { name: "Mar", totalUsers: 1500, activeUsers: 1200 },
  { name: "Apr", totalUsers: 1800, activeUsers: 1400 },
  { name: "May", totalUsers: 2100, activeUsers: 1600 },
  { name: "Jun", totalUsers: 2400, activeUsers: 1900 },
  { name: "Jul", totalUsers: 2800, activeUsers: 2200 },
  { name: "Aug", totalUsers: 3200, activeUsers: 2500 },
  { name: "Sep", totalUsers: 3600, activeUsers: 2800 },
  // Add more months...
];

const mockRevenueData = [
  { name: "Subscriptions", value: 70 },
  { name: "Advertisements", value: 20 },
  { name: "Other", value: 10 },
];

const mockTopSongsData = [
  { name: "Song 1", streams: 1200000 },
  { name: "Song 2", streams: 980000 },
  { name: "Song 3", streams: 850000 },
  { name: "Song 4", streams: 720000 },
  { name: "Song 5", streams: 650000 },
];

const ChartHolder = () => {
  return (
    <GridWrapper className="grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      <UserGrowthChart data={mockUserGrowthData} />
      <RevenueChart data={mockRevenueData} />
      <TopSongsChart data={mockTopSongsData} />
    </GridWrapper>
  );
};

export default ChartHolder;

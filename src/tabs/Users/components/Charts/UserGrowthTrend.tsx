import { UserGrowthChart } from "@/tabs/Overview/components/Chart/Charts";

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

const UserGrowthTrend = () => {
  return <UserGrowthChart data={mockUserGrowthData} />;
};

export default UserGrowthTrend;

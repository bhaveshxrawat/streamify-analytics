import { RevenueChart } from "@/tabs/Overview/components/Chart/Charts";

const mockRevenueData = [
  { name: "Subscriptions", value: 70 },
  { name: "Advertisements", value: 20 },
  { name: "Other", value: 10 },
];

const RevenueDistributionChart = () => {
  return <RevenueChart data={mockRevenueData} />;
};

export default RevenueDistributionChart;

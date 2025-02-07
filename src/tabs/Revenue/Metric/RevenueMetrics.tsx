import GridWrapper from "@/components/GridWrapper";
import { MetricCard } from "./MetricCard";
import { DollarSign } from "lucide-react";

const mockMetrics = {
  totalRevenue: "1.2M",
  avgRevenuePerUser: "$2.33",
};

const RevenueMetrics = () => {
  return (
    <GridWrapper className="grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 mb-8">
      <MetricCard
        icon={<DollarSign />}
        title="Revenue"
        value={mockMetrics.totalRevenue}
        trend={{ isPositive: true, value: 5 }}
      />
      <MetricCard
        icon={<DollarSign />}
        title="Average Revenue per User"
        value={mockMetrics.avgRevenuePerUser}
        trend={{ isPositive: true, value: 3 }}
      />
    </GridWrapper>
  );
};

export default RevenueMetrics;

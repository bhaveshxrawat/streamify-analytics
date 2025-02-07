import TabContentWrapper from "@/components/dashboard/TabContentWrapper";
import RevenueMetrics from "./Metric/RevenueMetrics";
import RevenueDistributionChart from "./Chart/RevenueDistributionChart";

const Revenue = () => {
  return (
    <TabContentWrapper>
      <h1 className="text-4xl font-bold mb-8">Revenue Analytics</h1>
      <RevenueMetrics />
      <RevenueDistributionChart />
    </TabContentWrapper>
  );
};

export default Revenue;

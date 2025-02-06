import { motion } from "framer-motion";
import OverviewMetrics from "@/tabs/Overview/components/Metric/OverviewMetrics";
import ChartHolder from "@/tabs/Overview/components/Chart/ChartHolder";
import RecentStreams from "@/tabs/Overview/components/RecentStreams/RecentStreams";
import TabContentWrapper from "@/components/dashboard/TabContentWrapper";

const Overview = () => {
  return (
    <TabContentWrapper>
      <h1 className="text-4xl font-bold mb-8">Overview</h1>
      <OverviewMetrics />
      <ChartHolder />
      <RecentStreams />
    </TabContentWrapper>
  );
};

export default Overview;

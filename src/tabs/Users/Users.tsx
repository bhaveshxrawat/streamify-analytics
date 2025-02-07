import UserMetrics from "./components/Metric/UserMetrics";
import TabContentWrapper from "@/components/dashboard/TabContentWrapper";
import UserGrowthTrend from "./components/Charts/UserGrowthTrend";

const Users = () => {
  return (
    <TabContentWrapper>
      <h1 className="text-4xl font-bold mb-8">User Analytics</h1>
      <UserMetrics />
      <UserGrowthTrend />
    </TabContentWrapper>
  );
};

export default Users;

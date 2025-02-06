import { motion } from "framer-motion";
import UserMetrics from "./components/Metric/UserMetrics";
import TabContentWrapper from "@/components/dashboard/TabContentWrapper";
import ChartHolder from "../Overview/components/Chart/ChartHolder";

const Users = () => {
  return (
    <TabContentWrapper>
      <h1 className="text-4xl font-bold mb-8">User Analytics</h1>
      <UserMetrics />
      <ChartHolder />
    </TabContentWrapper>
  );
};

export default Users;

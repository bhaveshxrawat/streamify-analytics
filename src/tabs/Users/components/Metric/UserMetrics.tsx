import GridWrapper from "@/components/GridWrapper";
import UserMetricCard from "./UserMetricCard";

const mockMetrics = {
  monthlyActiveUsers: 856432,
  newUsers: 24853,
  retention: "78.3%",
};

const UserMetrics = () => {
  return (
    <GridWrapper className="grid-cols-[repeat(auto-fit,_minmax(15.625rem,_1fr))] gap-6 mb-8">
      <UserMetricCard
        title="Monthly Active Users"
        value={mockMetrics.monthlyActiveUsers}
        trend={{ isPositive: true, value: 8.2 }}
      />
      <UserMetricCard
        title="New Users"
        value={mockMetrics.newUsers}
        trend={{ isPositive: true, value: 12.5 }}
      />
      <UserMetricCard
        title="Retention Rate"
        value={mockMetrics.retention}
        trend={{ isPositive: true, value: 3.5 }}
      />
    </GridWrapper>
  );
};

export default UserMetrics;

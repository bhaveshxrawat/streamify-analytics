import { Card } from "@/components/ui/card";
import { ArrowDown, ArrowUp } from "lucide-react";

interface UserMetricCardProps {
  title: string;
  value: string | number;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

const UserMetricCard = ({ title, value, trend }: UserMetricCardProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow duration-300 grid grid-cols-[1fr] grid-rows-[auto_auto_auto] grid-flow-col h-full content-start">
      <span className="text-sm font-medium text-muted-foreground">{title}</span>
      <h3 className="text-4xl font-bold">
        {typeof value === "number" ? value.toLocaleString() : value}
      </h3>
      {trend && (
        <p className="flex items-center gap-1 mt-2">
          {trend.isPositive ? (
            <ArrowUp
              strokeWidth={2}
              size={20}
              className="text-green-700 bg-green-200 rounded-full p-1"
            />
          ) : (
            <ArrowDown
              strokeWidth={2}
              size={20}
              className="text-red-700 bg-red-200 rounded-full p-1"
            />
          )}
          <span
            className={`text-sm ${
              trend.isPositive ? "text-green-700" : "text-red-700"
            }`}
          >
            {Math.abs(trend.value)}%
          </span>
        </p>
      )}
    </Card>
  );
};

export default UserMetricCard;

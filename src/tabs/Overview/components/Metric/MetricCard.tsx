import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ArrowDown, ArrowUp } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export const MetricCard = ({ title, value, icon, trend }: MetricCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6 hover:shadow-lg transition-shadow duration-300 grid grid-cols-[1fr_auto] grid-rows-[auto_auto_auto] grid-flow-col h-full content-start">
        {/* <div className="flex items-center justify-between mb-4"> */}
        <span className="text-sm font-medium text-muted-foreground">
          {title}
        </span>
        {/* </div> */}
        <div className="flex gap-2 items-center">
          <motion.h3
            className="text-4xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {value}
          </motion.h3>
          {trend && (
            <p className="flex items-center gap-1">
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
        </div>
        {trend && (
          <p className="text-sm font-medium text-muted-foreground">
            compared to last month
          </p>
        )}
        <div
          className="text-primary p-2 rounded-full bg-primary/10 col-start-2"
          aria-hidden={"false"}
        >
          {icon}
        </div>
      </Card>
    </motion.div>
  );
};

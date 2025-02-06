import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Card } from "@/components/ui/card";

const COLORS = ["#FB7185", "#64748B", "#94A3B8", "#CBD5E1"];

export const UserGrowthChart = ({ data }: { data: any[] }) => (
  <Card className="p-6">
    <h3 className="text-lg font-semibold mb-4">User Growth</h3>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
          <XAxis dataKey="name" stroke="#64748B" />
          <YAxis stroke="#64748B" />
          <Tooltip
            contentStyle={{
              background: "rgba(255, 255, 255, 0.8)",
              border: "none",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
            }}
          />
          <Line
            type="monotone"
            dataKey="totalUsers"
            stroke="#FB7185"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="activeUsers"
            stroke="#64748B"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  </Card>
);

export const RevenueChart = ({ data }: { data: any[] }) => (
  <Card className="p-6">
    <h3 className="text-lg font-semibold mb-4">Revenue Distribution</h3>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              background: "rgba(255, 255, 255, 0.8)",
              border: "none",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  </Card>
);

export const TopSongsChart = ({ data }: { data: any[] }) => (
  <Card className="p-6">
    <h3 className="text-lg font-semibold mb-4">Top 5 Streamed Songs</h3>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
          <XAxis dataKey="name" stroke="#64748B" />
          <YAxis stroke="#64748B" />
          <Tooltip
            contentStyle={{
              background: "rgba(255, 255, 255, 0.8)",
              border: "none",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
            }}
          />
          <Bar dataKey="streams" fill="#FB7185" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  </Card>
);
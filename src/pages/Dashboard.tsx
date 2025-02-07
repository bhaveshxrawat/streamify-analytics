import Overview from "@/tabs/Overview/Overview";
import { useSearchParams } from "react-router-dom";
import NotFound from "./NotFound";
import Users from "@/tabs/Users/Users";
import TabLink from "@/components/dashboard/TabLink";
import Revenue from "@/tabs/Revenue/Revenue";
import Streams from "@/tabs/Streams/Streams";

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "overview"; // Default tab

  const tabs = {
    overview: <Overview />,
    users: <Users />,
    revenue: <Revenue />,
    streams: <Streams />,
    // Add more tabs here
  } as const;

  return (
    <div className="h-[100svh] grid grid-cols-[15.75rem_1fr]">
      <aside className="p-4 border-r-[1px] border-l-border">
        <nav className="flex flex-col gap-2">
          {Object.keys(tabs).map((tab, i) => (
            <TabLink key={i} activeTab={activeTab} tabName={tab} />
          ))}
        </nav>
      </aside>
      <main className="overflow-y-auto h-full">
        {tabs[activeTab as keyof typeof tabs] || <NotFound />}
      </main>
    </div>
  );
};

export default Dashboard;

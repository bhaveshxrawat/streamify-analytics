import { useSearchParams } from "react-router-dom";
import TabLink from "@/components/dashboard/TabLink";
import Overview from "@/tabs/Overview/Overview";
import Revenue from "@/tabs/Revenue/Revenue";
import Streams from "@/tabs/Streams/Streams";
import Users from "@/tabs/Users/Users";
import NotFound from "./NotFound";

const Dashboard = () => {
	const [searchParams] = useSearchParams();
	const activeTab = searchParams.get("tab") || "overview"; // Default tab

	const tabs = {
		overview: <Overview />,
		users: <Users />,
		revenue: <Revenue />,
		streams: <Streams />,
		// Add more tabs here
	};

	return (
		<div className="h-[100svh] grid grid-cols-[15.75rem_1fr] md-max:grid-cols-1 md-max:grid-rows-[1fr_auto]">
			<aside className="p-4 border-r-[1px] border-l-border md-max:contents">
				<nav className="flex flex-col gap-2 md-max:z-10 md-max:w-full md-max:flex-row md-max:p-2 md-max:bg-white md-max:border-t md-max:overflow-x-auto">
					{Object.keys(tabs).map((tab, i) => (
						<TabLink
							key={i}
							activeTab={activeTab}
							tabName={tab}
							className="md-max:flex-1 md-max:text-center"
						/>
					))}
				</nav>
			</aside>
			<main className="overflow-y-auto h-full md-max:row-start-1 md-max:row-end-2">
				{tabs[activeTab as keyof typeof tabs] || <NotFound />}
			</main>
		</div>
	);
};

export default Dashboard;

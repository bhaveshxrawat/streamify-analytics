import { ComponentPropsWithoutRef } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type TabLinkProps = ComponentPropsWithoutRef<"a"> & {
	activeTab: string;
	tabName: string;
};

const TabLink = ({ activeTab, tabName, className, ...props }: TabLinkProps) => {
	return (
		<Link
			to={`/?tab=${tabName}`}
			className={cn(
				"p-2 hover:bg-primary/10 rounded-md capitalize",
				activeTab === tabName ? "active" : "",
				activeTab === tabName && "bg-primary/10",
				className,
			)}
			{...props}
		>
			{tabName}
		</Link>
	);
};

export default TabLink;

import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const TabLink = ({
  activeTab,
  tabName,
}: {
  activeTab: string;
  tabName: string;
}) => {
  return (
    <Link
      to={`/?tab=${tabName}`}
      className={cn(
        "p-2 hover:bg-primary/10 rounded-md capitalize",
        activeTab === tabName ? "active" : "",
        activeTab === tabName && "bg-primary/10"
      )}
    >
      {tabName}
    </Link>
  );
};

export default TabLink;

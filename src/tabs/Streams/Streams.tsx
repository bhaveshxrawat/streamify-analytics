import TabContentWrapper from "@/components/dashboard/TabContentWrapper";
import TopStreamed from "./components/Chart/TopStreamed";

const Streams = () => {
  return (
    <TabContentWrapper>
      <h1 className="text-4xl font-bold mb-8">Stream Analytics</h1>
      <TopStreamed />
    </TabContentWrapper>
  );
};

export default Streams;

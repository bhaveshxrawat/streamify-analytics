import { TopSongsChart } from "@/tabs/Overview/components/Chart/Charts";

const mockTopSongsData = [
  { name: "Song 1", streams: 1200000 },
  { name: "Song 2", streams: 980000 },
  { name: "Song 3", streams: 850000 },
  { name: "Song 4", streams: 720000 },
  { name: "Song 5", streams: 650000 },
];

const TopStreamed = () => {
  return <TopSongsChart data={mockTopSongsData} />;
};

export default TopStreamed;

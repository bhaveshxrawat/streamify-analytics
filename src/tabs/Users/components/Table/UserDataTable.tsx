import { DataTable } from "@/tabs/Overview/components/RecentStreams/DataTable";

const mockStreamData = [
  {
    id: "1",
    songName: "Anti-Hero",
    artist: "Taylor Swift",
    dateStreamed: "2024-02-20",
    streamCount: 1234567,
    userId: "user123",
  },
  {
    id: "2",
    songName: "Cruel Summer",
    artist: "Taylor Swift",
    dateStreamed: "2024-02-19",
    streamCount: 987654,
    userId: "user456",
  },
  {
    id: "3",
    songName: "Flowers",
    artist: "Miley Cyrus",
    dateStreamed: "2024-02-18",
    streamCount: 876543,
    userId: "user789",
  },
  {
    id: "4",
    songName: "As It Was",
    artist: "Harry Styles",
    dateStreamed: "2024-02-17",
    streamCount: 765432,
    userId: "user234",
  },
  {
    id: "5",
    songName: "Unholy",
    artist: "Sam Smith",
    dateStreamed: "2024-02-16",
    streamCount: 654321,
    userId: "user567",
  },
];

const UserDataTable = () => {
  return <DataTable data={mockStreamData} />;
};

export default UserDataTable;

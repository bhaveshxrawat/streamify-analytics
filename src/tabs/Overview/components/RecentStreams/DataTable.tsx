import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

interface Stream {
  id: string;
  songName: string;
  artist: string;
  dateStreamed: string;
  streamCount: number;
  userId: string;
}

interface DataTableProps {
  data: Stream[];
}

export const DataTable = ({ data: initialData }: DataTableProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Stream;
    direction: "asc" | "desc";
  } | null>(null);

  const handleSort = (key: keyof Stream) => {
    setSortConfig((current) => ({
      key,
      direction:
        current?.key === key && current.direction === "asc" ? "desc" : "asc",
    }));
  };

  const filteredData = initialData.filter(
    (item) =>
      item.songName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortConfig) return 0;

    const { key, direction } = sortConfig;
    if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
    if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div className="space-y-4">
      <Input
        placeholder="Search by song or artist..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="max-w-sm"
      />
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead
                onClick={() => handleSort("songName")}
                className="cursor-pointer"
              >
                Song Name
              </TableHead>
              <TableHead
                onClick={() => handleSort("artist")}
                className="cursor-pointer"
              >
                Artist
              </TableHead>
              <TableHead
                onClick={() => handleSort("dateStreamed")}
                className="cursor-pointer"
              >
                Date Streamed
              </TableHead>
              <TableHead
                onClick={() => handleSort("streamCount")}
                className="cursor-pointer"
              >
                Stream Count
              </TableHead>
              <TableHead>User ID</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.map((stream) => (
              <tr className="hover:bg-muted/50 transition-colors">
                <TableCell className="font-medium">{stream.songName}</TableCell>
                <TableCell>{stream.artist}</TableCell>
                <TableCell>{stream.dateStreamed}</TableCell>
                <TableCell>{stream.streamCount.toLocaleString()}</TableCell>
                <TableCell className="text-muted-foreground">
                  {stream.userId}
                </TableCell>
              </tr>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

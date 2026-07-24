import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PageToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;

  status: string;
  onStatusChange: (value: string) => void;
}

export function PageToolbar({
  search,
  onSearchChange,
  status,
  onStatusChange,
}: PageToolbarProps) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border bg-card p-4 md:flex-row md:items-center md:justify-between">
      <div className="relative w-full md:max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

        <Input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search pages..."
          className="pl-9"
        />
      </div>

        <Select
  value={status}
  onValueChange={(value) => onStatusChange(value ?? "all")}
>
  <SelectTrigger className="w-full md:w-44">
    <SelectValue />
  </SelectTrigger>

  <SelectContent>
    <SelectItem value="all">All Status</SelectItem>
    <SelectItem value="published">Published</SelectItem>
    <SelectItem value="draft">Draft</SelectItem>
  </SelectContent>
</Select>
    </div>
  );
}
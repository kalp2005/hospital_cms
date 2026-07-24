import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

interface DataTableToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;
  searchPlaceholder?: string;
  children?: React.ReactNode;
}

export function TableToolbar({
  search,
  onSearchChange,
  searchPlaceholder = "Search...",
  children,
}: DataTableToolbarProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative w-full sm:max-w-sm">
        <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />

        <Input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={searchPlaceholder}
          className="pl-9"
        />
      </div>

      <div className="flex items-center gap-2">
        {children}
      </div>
    </div>
  );
}
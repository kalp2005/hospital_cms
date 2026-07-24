import type { ColumnDef } from "@tanstack/react-table";
import {
  ArrowUp,
  ArrowDown,
  ArrowUpDown,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import type { Page } from "../types";

function SortableHeader({
  column,
  title,
}: {
  column: any;
  title: string;
}) {
  const sorted = column.getIsSorted();

  return (
    <Button
      variant="ghost"
      className="-ml-3"
      onClick={() => column.toggleSorting(sorted === "asc")}
    >
      {title}

      {sorted === "asc" ? (
        <ArrowUp className="ml-2 h-4 w-4" />
      ) : sorted === "desc" ? (
        <ArrowDown className="ml-2 h-4 w-4" />
      ) : (
        <ArrowUpDown className="ml-2 h-4 w-4 opacity-50" />
      )}
    </Button>
  );
}

export const pageColumns: ColumnDef<Page>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => (
      <SortableHeader column={column} title="Title" />
    ),
  },
  {
    accessorKey: "slug",
    header: ({ column }) => (
      <SortableHeader column={column} title="Slug" />
    ),
    cell: ({ row }) => (
      <span className="text-muted-foreground">
        /{row.original.slug}
      </span>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <SortableHeader column={column} title="Status" />
    ),
    cell: ({ row }) => (
      <Badge
        variant={
          row.original.status === "published"
            ? "default"
            : "secondary"
        }
      >
        {row.original.status}
      </Badge>
    ),
  },
  {
    accessorKey: "updatedAt",
    header: ({ column }) => (
      <SortableHeader column={column} title="Last Updated" />
    ),
    cell: ({ row }) =>
      new Date(row.original.updatedAt).toLocaleDateString(),
  },
];
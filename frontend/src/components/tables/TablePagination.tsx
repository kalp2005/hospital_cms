import type { Table } from "@tanstack/react-table";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TablePaginationProps<TData> {
  table: Table<TData>;
}

export function TablePagination<TData>({
  table,
}: TablePaginationProps<TData>) {
  return (
    <div className="flex flex-col gap-4 border-t px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="text-muted-foreground text-sm">
        Showing{" "}
        {table.getRowModel().rows.length === 0
          ? 0
          : table.getState().pagination.pageIndex *
              table.getState().pagination.pageSize +
            1}
        {" - "}
        {Math.min(
          (table.getState().pagination.pageIndex + 1) *
            table.getState().pagination.pageSize,
          table.getFilteredRowModel().rows.length
        )}{" "}
        of {table.getFilteredRowModel().rows.length}
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="text-sm">Rows per page</span>

          <Select
            value={String(table.getState().pagination.pageSize)}
            onValueChange={(value) =>
              table.setPageSize(Number(value))
            }
          >
            <SelectTrigger className="w-20">
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <span className="text-sm">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </span>

          <Button
            variant="outline"
            size="icon"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
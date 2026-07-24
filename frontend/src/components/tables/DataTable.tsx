import { useMemo, useState } from "react";
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table";

import { TablePagination } from "./TablePagination";
import { TableToolbar } from "./TableToolbar";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DataTableProps<TData> {
  columns: ColumnDef<TData>[];
  data: TData[];
  searchKey?: string;
  searchPlaceholder?: string;
  children?: React.ReactNode;
}

export function DataTable<TData>({
  columns,
  data,
  searchKey,
  searchPlaceholder = "Search...",
  children,
}: DataTableProps<TData>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    if (!searchKey || !search.trim()) return data;

    return data.filter((item) => {
      const value = (item as Record<string, unknown>)[searchKey];

      return String(value ?? "")
        .toLowerCase()
        .includes(search.toLowerCase());
    });
  }, [data, search, searchKey]);

  const table = useReactTable({
    data: filteredData,
    columns,

    state: {
      sorting,
    },

    onSortingChange: setSorting,

    initialState: {
      pagination: {
        pageSize: 10,
      },
    },

    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="space-y-4">
      {searchKey && (
        <TableToolbar
          search={search}
          onSearchChange={setSearch}
          searchPlaceholder={searchPlaceholder}
        >
          {children}
        </TableToolbar>
      )}

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No data found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <TablePagination table={table} />
      </div>
    </div>
  );
}
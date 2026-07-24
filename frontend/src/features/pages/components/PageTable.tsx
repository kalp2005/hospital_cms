import type { Page } from "../types";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";

interface PageTableProps {
  pages: Page[];
}

export function PageTable({
  pages,
}: PageTableProps) {
  return (
    <div className="rounded-lg border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[35%]">Title</TableHead>
            <TableHead>Slug</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Updated</TableHead>
            <TableHead className="w-16 text-right">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {pages.map((page) => (
            <TableRow key={page.id}>
              <TableCell className="font-medium">
                {page.title}
              </TableCell>

              <TableCell className="text-muted-foreground">
                /{page.slug}
              </TableCell>

              <TableCell>
                <Badge
                  variant={
                    page.status === "published"
                      ? "default"
                      : "secondary"
                  }
                >
                  {page.status}
                </Badge>
              </TableCell>

              <TableCell>
                {new Date(page.updatedAt).toLocaleDateString()}
              </TableCell>

              <TableCell className="text-right">
                Actions
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
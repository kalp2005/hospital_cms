import { useMemo, useState } from "react";

import { PageHeader } from "../components/PageHeader";
import { PageTable } from "../components/PageTable";
import { PageToolbar } from "../components/PageToolbar";
import type { Page } from "../types";

const mockPages: Page[] = [
  {
    id: "1",
    title: "Home",
    slug: "",
    content: "",
    featuredImage: "",
    status: "published",
    createdAt: "2026-07-20T10:00:00Z",
    updatedAt: "2026-07-24T09:30:00Z",
  },
  {
    id: "2",
    title: "About Us",
    slug: "about-us",
    content: "",
    featuredImage: "",
    status: "published",
    createdAt: "2026-07-18T10:00:00Z",
    updatedAt: "2026-07-22T08:00:00Z",
  },
  {
    id: "3",
    title: "Contact",
    slug: "contact",
    content: "",
    featuredImage: "",
    status: "draft",
    createdAt: "2026-07-15T10:00:00Z",
    updatedAt: "2026-07-20T11:00:00Z",
  },
];

export default function PagesPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  const filteredPages = useMemo(() => {
    return mockPages.filter((page) => {
      const matchesSearch =
        page.title.toLowerCase().includes(search.toLowerCase()) ||
        page.slug.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        status === "all" || page.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  return (
    <div className="space-y-6">
      <PageHeader />

      <PageToolbar
        search={search}
        onSearchChange={setSearch}
        status={status}
        onStatusChange={(value) => setStatus(value ?? "all")}
      />

      <PageTable pages={filteredPages} />
    </div>
  );
}
export type PageStatus = "draft" | "published";

export interface Page {
  id: string;
  title: string;
  slug: string;
  content: string;

  featuredImage?: string;

  status: PageStatus;

  createdAt: string;
  updatedAt: string;
}
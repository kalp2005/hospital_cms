import { z } from "zod";

export const pageSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title must be at least 3 characters.")
    .max(100, "Title cannot exceed 100 characters."),

  slug: z
    .string()
    .trim()
    .min(1, "Slug is required.")
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug can only contain lowercase letters, numbers, and hyphens."
    ),

  content: z
    .string()
    .trim()
    .min(1, "Content is required."),

  featuredImage: z
    .string()
    .url("Invalid image URL.")
    .optional()
    .or(z.literal("")),

  status: z.enum(["draft", "published"]),
});

export type PageFormValues = z.infer<typeof pageSchema>;
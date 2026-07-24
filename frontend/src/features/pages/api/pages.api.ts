import { http } from "@/services/http";

import type { Page } from "../types";
import type { PageFormValues } from "../schemas/page.schema";

export const getPages = async () => {
  const { data } = await http.get<Page[]>("/pages");
  return data;
};

export const getPage = async (id: string) => {
  const { data } = await http.get<Page>(`/pages/${id}`);
  return data;
};

export const createPage = async (payload: PageFormValues) => {
  const { data } = await http.post<Page>("/pages", payload);
  return data;
};

export const updatePage = async (
  id: string,
  payload: PageFormValues
) => {
  const { data } = await http.put<Page>(`/pages/${id}`, payload);
  return data;
};

export const deletePage = async (id: string) => {
  await http.delete(`/pages/${id}`);
};
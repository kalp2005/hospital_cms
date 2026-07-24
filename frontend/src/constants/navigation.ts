import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  FileSpreadsheet,
  FileText,
  FolderOpen,
  Image,
  LayoutDashboard,
  Menu,
  Newspaper,
  Search,
  Settings,
  Shield,
  Users,
} from "lucide-react";

import { ROUTES } from "./routes";

export interface NavigationItem {
  title: string;
  url: string;
  icon: LucideIcon;
}

export interface NavigationGroup {
  title: string;
  items: NavigationItem[];
}

export interface NavigationLink extends NavigationItem {
  items?: never;
}

export type Navigation = NavigationLink | NavigationGroup;

export const navigation: Navigation[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    url: ROUTES.DASHBOARD,
  },

  {
    title: "Content",
    items: [
      {
        title: "Pages",
        icon: FileText,
        url: ROUTES.PAGES,
      },
      {
        title: "Blogs",
        icon: Newspaper,
        url: ROUTES.BLOGS,
      },
      {
        title: "Gallery",
        icon: Image,
        url: ROUTES.GALLERY,
      },
      {
        title: "Careers",
        icon: Briefcase,
        url: ROUTES.CAREERS,
      },
    ],
  },

  {
    title: "Website",
    items: [
      {
        title: "Menus",
        icon: Menu,
        url: ROUTES.MENUS,
      },
      {
        title: "Media Library",
        icon: FolderOpen,
        url: ROUTES.MEDIA,
      },
      {
        title: "SEO",
        icon: Search,
        url: ROUTES.SEO,
      },
    ],
  },

  {
    title: "System",
    items: [
      {
        title: "Form Submissions",
        icon: FileSpreadsheet,
        url: ROUTES.FORM_SUBMISSIONS,
      },
      {
        title: "Users",
        icon: Users,
        url: ROUTES.USERS,
      },
      {
        title: "Roles",
        icon: Shield,
        url: ROUTES.ROLES,
      },
      {
        title: "Settings",
        icon: Settings,
        url: ROUTES.SETTINGS,
      },
    ],
  },
];
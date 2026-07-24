import {
  LayoutDashboard,
  FileText,
  Newspaper,
  Image,
  Briefcase,
  Menu,
  FolderOpen,
  Search,
  FileSpreadsheet,
  Users,
  Shield,
  Settings,
} from "lucide-react";

export const navigation = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    url: "/dashboard",
  },

  {
    title: "Content",
    items: [
      {
        title: "Pages",
        icon: FileText,
        url: "/content/pages",
      },
      {
        title: "Blogs",
        icon: Newspaper,
        url: "/content/blogs",
      },
      {
        title: "Gallery",
        icon: Image,
        url: "/content/gallery",
      },
      {
        title: "Careers",
        icon: Briefcase,
        url: "/content/careers",
      },
    ],
  },

  {
    title: "Website",
    items: [
      {
        title: "Menus",
        icon: Menu,
        url: "/website/menus",
      },
      {
        title: "Media Library",
        icon: FolderOpen,
        url: "/website/media",
      },
      {
        title: "SEO",
        icon: Search,
        url: "/website/seo",
      },
    ],
  },

  {
    title: "System",
    items: [
      {
        title: "Form Submissions",
        icon: FileSpreadsheet,
        url: "/system/forms",
      },
      {
        title: "Users",
        icon: Users,
        url: "/system/users",
      },
      {
        title: "Roles",
        icon: Shield,
        url: "/system/roles",
      },
      {
        title: "Settings",
        icon: Settings,
        url: "/system/settings",
      },
    ],
  },
];
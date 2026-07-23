import {
  LayoutDashboard,
  Stethoscope,
  Users,
  CalendarDays,
  Building2,
  UserCog,
  Settings,
} from "lucide-react";

export const navigation = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Doctors",
    url: "/doctors",
    icon: Stethoscope,
  },
  {
    title: "Patients",
    url: "/patients",
    icon: Users,
  },
  {
    title: "Appointments",
    url: "/appointments",
    icon: CalendarDays,
  },
  {
    title: "Departments",
    url: "/departments",
    icon: Building2,
  },
  {
    title: "Users",
    url: "/users",
    icon: UserCog,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];
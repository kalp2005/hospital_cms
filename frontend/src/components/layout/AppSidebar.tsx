import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Stethoscope,
  Users,
  CalendarDays,
  Building2,
  UserCog,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Doctors",
    icon: Stethoscope,
    path: "/doctors",
  },
  {
    title: "Patients",
    icon: Users,
    path: "/patients",
  },
  {
    title: "Appointments",
    icon: CalendarDays,
    path: "/appointments",
  },
  {
    title: "Departments",
    icon: Building2,
    path: "/departments",
  },
  {
    title: "Users",
    icon: UserCog,
    path: "/users",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

export function AppSidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-white">
      <div className="border-b p-6">
        <h1 className="text-xl font-bold text-blue-600">
          Hospital CMS
        </h1>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`
              }
            >
              <Icon size={20} />
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
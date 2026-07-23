import { NavLink } from "react-router-dom";
import { navigation } from "@/constants/navigation";

export function NavMain() {
  return (
    <nav className="flex flex-col gap-1">
      {navigation.map((item) => {
        const Icon = item.icon;

        return (
          <NavLink
            key={item.title}
            to={item.url}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`
            }
          >
            <Icon className="h-4 w-4" />
            <span>{item.title}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}
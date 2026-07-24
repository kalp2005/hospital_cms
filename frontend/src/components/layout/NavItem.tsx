import { NavLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

import {
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface NavItemProps {
  title: string;
  url: string;
  icon: LucideIcon;
}

export function NavItem({
  title,
  url,
  icon: Icon,
}: NavItemProps) {
  return (
    <NavLink to={url}>
      {({ isActive }) => (
        <SidebarMenuItem>
          <SidebarMenuButton
            render={<NavLink to={url} />}
            isActive={isActive}
            tooltip={title}
          >
            <Icon />
            <span>{title}</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      )}
    </NavLink>
  );
}
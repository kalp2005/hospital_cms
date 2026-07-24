import { Logo } from "../common/Logo";
import { NavMain } from "./NavMain";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b px-4 py-3">
        <Logo />
      </SidebarHeader>

      <SidebarContent className="px-2 py-3">
        <NavMain />
      </SidebarContent>

      <SidebarFooter className="border-t p-2">
        {/* User profile */}
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
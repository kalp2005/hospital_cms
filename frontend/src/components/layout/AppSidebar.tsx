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
      <SidebarHeader className="h-14 px-4">
        <Logo/>
      </SidebarHeader>

      <SidebarContent>
        <NavMain />
      </SidebarContent>

      <SidebarFooter>
        {/* User profile will go here */}
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
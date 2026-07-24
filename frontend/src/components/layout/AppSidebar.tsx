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
      <SidebarHeader className="h-14 justify-center px-4">
        <h2 className="text-lg font-bold">Hospital CMS</h2>
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
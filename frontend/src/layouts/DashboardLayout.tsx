import { Outlet } from "react-router-dom";

import { AppHeader, AppSidebar } from "@/components/layout";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";

export default function DashboardLayout() {
  return (
    <SidebarProvider defaultOpen>
      <AppSidebar />

      <SidebarInset>
        <AppHeader />

        <main className="flex flex-1 flex-col p-6">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
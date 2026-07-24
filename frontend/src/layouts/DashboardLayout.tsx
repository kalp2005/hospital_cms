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

        <main className="flex flex-1">
          <div className="mx-auto w-full max-w-7xl p-6 lg:p-8">
            <Outlet />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
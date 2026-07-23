import { Outlet } from "react-router-dom";
import { AppSidebar, AppHeader } from "@/components/layout";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-muted/40">
      <AppSidebar />

      <div className="flex flex-1 flex-col">
        <AppHeader />

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
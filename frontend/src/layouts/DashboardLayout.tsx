import { Outlet } from "react-router-dom";
import { AppSidebar } from "@/components/layout/AppSidebar";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <AppSidebar />

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
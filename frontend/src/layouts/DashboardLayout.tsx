import { Outlet } from "react-router-dom";

import { Header } from "@/components/layout/PageContainer";
import { Sidebar } from "@/components/layout/PageContainer";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Header />

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
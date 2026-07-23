import { AppHeader } from "@/components/layout/AppHeader";

export default function DashboardPage() {
  return (
    <>
      <AppHeader />

      <div className="p-6">
        <h1 className="text-3xl font-bold">
          Welcome 👋
        </h1>

        <p className="mt-2 text-slate-500">
          Hospital Management Dashboard
        </p>
      </div>
    </>
  );
}
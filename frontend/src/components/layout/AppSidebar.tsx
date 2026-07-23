import { NavMain } from "./NavMain";
import { NavUser } from "./NavUser";
import { TeamSwitcher } from "./TeamSwitcher";

export function AppSidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-background">
      <TeamSwitcher />

      <div className="flex-1 p-3">
        <NavMain />
      </div>

      <NavUser />
    </aside>
  );
}
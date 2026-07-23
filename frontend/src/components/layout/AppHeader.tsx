import { Bell } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function AppHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <h2 className="text-xl font-semibold">
        Dashboard
      </h2>

      <div className="flex items-center gap-4">
        <Bell className="h-5 w-5 cursor-pointer" />

        <Avatar>
          <AvatarFallback>AD</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
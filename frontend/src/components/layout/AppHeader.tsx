import { Bell } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function AppHeader() {
  return (
    <header className="flex h-15 items-center justify-between border-b bg-background px-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Welcome back, Admin 👋
        </p>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>

        <Avatar>
          <AvatarFallback>AD</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
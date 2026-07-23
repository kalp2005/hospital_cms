import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function NavUser() {
  return (
    <div className="flex items-center gap-3 border-t p-4">
      <Avatar>
        <AvatarFallback>AD</AvatarFallback>
      </Avatar>

      <div>
        <p className="text-sm font-medium">Admin</p>
        <p className="text-xs text-muted-foreground">
          admin@hospital.com
        </p>
      </div>
    </div>
  );
}
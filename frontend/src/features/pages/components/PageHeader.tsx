import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface PageHeaderProps {
  onCreate?: () => void;
}

export function PageHeader({
  onCreate,
}: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Pages
        </h1>

        <p className="text-muted-foreground mt-1">
          Manage your website pages.
        </p>
      </div>

      <Button onClick={onCreate}>
        <Plus className="mr-2 h-4 w-4" />
        Add Page
      </Button>
    </div>
  );
}
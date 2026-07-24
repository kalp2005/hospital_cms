import { navigation } from "@/constants/navigation";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";

import { NavItem } from "./NavItem";

export function NavMain() {
  return (
    <>
      {navigation.map((section) => {
        // Single item (Dashboard)
        if ("url" in section) {
          return (
            <SidebarGroup
              key={section.title}
              className="py-1"
            >
              <SidebarGroupContent>
                <SidebarMenu>
                  <NavItem
                    title={section.title}
                    url={section.url}
                    icon={section.icon}
                  />
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          );
        }

        // Grouped navigation
        return (
          <SidebarGroup
            key={section.title}
            className="py-1"
          >
            <SidebarGroupLabel className="px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {section.title}
            </SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <NavItem
                    key={item.title}
                    title={item.title}
                    url={item.url}
                    icon={item.icon}
                  />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        );
      })}
    </>
  );
}
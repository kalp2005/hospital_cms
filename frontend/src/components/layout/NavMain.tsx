import { NavLink } from "react-router-dom";

import { navigation } from "@/constants/navigation";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavMain() {
  return (
    <>
      {navigation.map((section) => {
        // Dashboard (single link)
        if ("url" in section) {
          const Icon = section.icon;

          return (
            <SidebarGroup key={section.title}>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      render={
                        <NavLink
                          to={section.url}
                          className={({ isActive }) =>
                            isActive ? "data-[active=true]" : ""
                          }
                        />
                      }
                    >
                      <Icon />
                      <span>{section.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          );
        }

        // Grouped items
        return (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel>{section.title}</SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        render={
                          <NavLink
                            to={item.url}
                            className={({ isActive }) =>
                              isActive ? "data-[active=true]" : ""
                            }
                          />
                        }
                      >
                        <Icon />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        );
      })}
    </>
  );
}
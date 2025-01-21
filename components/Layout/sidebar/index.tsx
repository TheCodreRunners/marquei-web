import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar";
import { HomeIcon, ContactIcon, SettingsIcon } from "lucide-react";

  
  const menuItems = [
    {
      label: "Application",
      items: [
        { title: "Home", url: "/home", icon: HomeIcon },
        { title: "About", url: "/about", icon: HomeIcon },
        { title: "Services", url: "/services", icon: HomeIcon },
        { title: "Contact", url: "/contact", icon: ContactIcon },
        { title: "Settings", url: "/settings", icon: SettingsIcon },
      ],
    },
  ];
  
  export function AppSidebar() {
    return (
      <Sidebar className="w-64 bg-green-500 text-white">
        <SidebarContent>
          {menuItems.map((group) => (
            <SidebarGroup key={group.label}>
              <SidebarGroupLabel className="text-lg font-bold px-4 py-2">
                {group.label}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => (
                    <SidebarMenuItem key={item.title} className="hover:bg-green-600 px-4 py-2">
                      <SidebarMenuButton asChild>
                        <a href={item.url} className="flex items-center gap-2">
                          <item.icon className="w-5 h-5" />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
      </Sidebar>
    );
  }
  
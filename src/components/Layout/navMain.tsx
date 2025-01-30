"use client"

import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@radix-ui/react-collapsible"
import { ChevronRight, type LucideIcon } from "lucide-react"
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton } from "../ui/sidebar"



export function NavMain({
  items,
}: {
  readonly items: readonly {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: readonly {
      title: string
      url: string
    }[]
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-paragraph-shade">Admin</SidebarGroupLabel>
      <SidebarMenu className="text-paragraph-shade hover:text-paragraph-primary">
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem   >
              <CollapsibleTrigger className="text-paragraph-shade hover:text-paragraph-primary" asChild>
                <SidebarMenuButton tooltip={item.title} >
                  {item.icon && <item.icon />}
                  <span className="" >{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub className="">
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem className="text-paragraph-shade  hover:text-paragraph-primary" key={subItem.title}>
                      <SidebarMenuSubButton className="text-paragraph-shade  hover:text-paragraph-primary" asChild>
                        <a href={subItem.url}>
                          <span>{subItem.title}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}

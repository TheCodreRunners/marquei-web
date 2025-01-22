"use client"
import * as React from "react";
import { ChevronsUpDown } from "lucide-react";

import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,

} from "@/components/ui/sidebar";

export function TeamSwitcher({
    teams,
}: {
    teams: {
        name: string
        logo: React.ElementType
        plan: string
    }[]
}) {

    const [activeTeam] = React.useState(teams[0])

    return (
        <SidebarMenu >
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground text-paragraph-shade hover:text-paragraph-primary "
                        >
                            <div className=" flex aspect-square size-8 items-center justify-center rounded-lg bg-primary hover:bg-secondary ">
                                <activeTeam.logo className="size-4 text-paragraph-primary" />
                            </div>
                            <div className="grid flex-1 text-left text-sm leading-tight ">
                                <span className="truncate font-semibold ">
                                    {activeTeam.name}
                                </span>
                                <span className="truncate text-xs">{activeTeam.plan}</span>
                            </div>
                            {
                                teams.length > 1 && (
                                    <ChevronsUpDown className="ml-auto" />
                                )
                            }
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    {/* <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground">
              Teams
            </DropdownMenuLabel>
            {teams.map((team, index) => (
              <DropdownMenuItem
                key={team.name}
                onClick={() => setActiveTeam(team)}
                className="gap-2 p-2"
              >
                <div className="flex size-6 items-center justify-center rounded-sm border">
                  <team.logo className="size-4 shrink-0" />
                </div>
                {team.name}
                <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 p-2">
              <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                <Plus className="size-4" />
              </div>
              <div className="font-medium text-muted-foreground">Add team</div>
            </DropdownMenuItem>
          </DropdownMenuContent> */}
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}

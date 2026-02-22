"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon, PlusSignIcon, MoreHorizontalCircle01Icon } from "@hugeicons/core-free-icons"

export function NavWorkspaces({
  workspaces,
  onAddWorkspace,
}: {
  workspaces: {
    name: string
    icon: React.ReactNode
    url?: string
    pages: {
      name: string
      icon: React.ReactNode
      url: string
    }[]
  }[]
  onAddWorkspace?: () => void
}) {
  const pathname = usePathname()

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Workspaces</SidebarGroupLabel>
      <SidebarGroupAction title="Add Workspace" onClick={onAddWorkspace}>
        <HugeiconsIcon icon={PlusSignIcon} /> <span className="sr-only">Add Workspace</span>
      </SidebarGroupAction>
      <SidebarGroupContent>
        <SidebarMenu>
          {workspaces.map((workspace) => {
            const hasActiveChild = workspace.pages.some((p) => pathname === p.url)
            const isWorkspaceActive = workspace.url ? pathname === workspace.url : hasActiveChild

            return (
              <Collapsible key={workspace.name} defaultOpen={hasActiveChild}>
                <SidebarMenuItem>
                  {workspace.url ? (
                    <SidebarMenuButton asChild isActive={isWorkspaceActive}>
                      <Link href={workspace.url}>
                        {workspace.icon}
                        <span className="font-normal text-sm">{workspace.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  ) : (
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip={workspace.name} isActive={isWorkspaceActive}>
                        {workspace.icon}
                        <span className="font-normal text-sm">{workspace.name}</span>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                  )}
                  {workspace.pages && workspace.pages.length > 0 && (
                    <CollapsibleTrigger asChild>
                      <SidebarMenuAction
                        className="bg-sidebar-accent text-sidebar-accent-foreground inset-s-2 data-[state=open]:rotate-90"
                        showOnHover
                      >
                        <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} />
                      </SidebarMenuAction>
                    </CollapsibleTrigger>
                  )}
                  <SidebarMenuAction showOnHover>
                    <HugeiconsIcon icon={MoreHorizontalCircle01Icon} strokeWidth={2} />
                  </SidebarMenuAction>
                  {workspace.pages && workspace.pages.length > 0 && (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {workspace.pages.map((page) => (
                          <SidebarMenuSubItem key={page.name}>
                            <SidebarMenuSubButton asChild isActive={pathname === page.url}>
                              <Link href={page.url}>
                                {page.icon}
                                <span className="font-normal text-sm">{page.name}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  )}
                </SidebarMenuItem>
              </Collapsible>
            )
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}


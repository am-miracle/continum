"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { HugeiconsIcon } from "@hugeicons/react"
import { PlusSignIcon, MoreHorizontalCircle01Icon } from "@hugeicons/core-free-icons"

export function NavWorkspaces({
  workspaces,
  onAddWorkspace,
}: {
  workspaces: {
    name: string
    icon: React.ReactNode
    url?: string
    slug?: string
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
      <SidebarGroupAction
        title="Add Workspace"
        onClick={onAddWorkspace}
        className="group-data-[collapsible=icon]:flex"
      >
        <HugeiconsIcon icon={PlusSignIcon} /> <span className="sr-only">Add Workspace</span>
      </SidebarGroupAction>
      <SidebarGroupContent>
        <SidebarMenu>
          {workspaces.map((workspace) => {
            const hasActiveChild = workspace.pages.some((p) => pathname === p.url)
            const isWorkspaceActive = workspace.url ? pathname === workspace.url : hasActiveChild

            const workspaceUrl = workspace.url || (workspace.pages.length > 0 ? workspace.pages[0].url : "#")

            return (
              <SidebarMenuItem key={workspace.name}>
                <SidebarMenuButton
                  asChild
                  isActive={isWorkspaceActive}
                  className={`${isWorkspaceActive && "border-accent rounded-lg border-2"}`}
                >
                  <Link href={workspaceUrl}>
                    {workspace.icon}
                    <span className="font-normal text-sm">{workspace.name}</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuAction showOnHover>
                  <HugeiconsIcon icon={MoreHorizontalCircle01Icon} strokeWidth={2} />
                </SidebarMenuAction>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavWorkspaces } from "@/components/nav-workspaces"
import { TeamSwitcher } from "@/components/team-switcher"
import { AddWorkspaceDialog } from "@/components/add-workspace-dialog"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { navigationData, type Workspace, type NavigationData } from "@/lib/navigation-data"
import { HugeiconsIcon } from "@hugeicons/react"
import {

  FolderOpenIcon,
} from "@hugeicons/core-free-icons"

// This is sample data.
const data: NavigationData = navigationData

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [workspaces, setWorkspaces] = React.useState<Workspace[]>(data.workspaces)
  const [dialogOpen, setDialogOpen] = React.useState(false)

  const handleAddWorkspace = (name: string) => {
    const newWorkspace: Workspace = {
      name,
      slug: name.toLowerCase().replace(/\s+/g, "-"),
      icon: <HugeiconsIcon icon={FolderOpenIcon} className="text-indigo-400" strokeWidth={2} />,
      pages: [],
    }
    setWorkspaces([...workspaces, newWorkspace])
  }

  return (
    <>
      <Sidebar collapsible="icon" className="border-e-0" {...props}>
        <SidebarHeader>
          <TeamSwitcher teams={data.teams} />
          <NavMain items={data.navMain} />
        </SidebarHeader>
        <SidebarContent>
          <NavWorkspaces
            workspaces={workspaces}
            onAddWorkspace={() => setDialogOpen(true)}
          />
          <NavSecondary items={data.navSecondary} className="mt-auto" />
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <AddWorkspaceDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onAdd={handleAddWorkspace}
      />
    </>
  )
}

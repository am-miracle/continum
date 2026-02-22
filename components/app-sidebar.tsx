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
import { HugeiconsIcon } from "@hugeicons/react"
import {
  CommandIcon,
  AudioWave01Icon,
  SearchIcon,
  File01Icon,
  FolderOpenIcon,
  AiEditingFreeIcons,
  Home11FreeIcons,
  GridFreeIcons,
  Setting06FreeIcons,
  LayerFreeIcons,
  Megaphone03FreeIcons,
  SmilePlus,
  Trash2,
  Road02FreeIcons
} from "@hugeicons/core-free-icons"

// This is sample data.
const data = {
  teams: [
    {
      name: "Acme Inc",
      logo: (
        <HugeiconsIcon icon={CommandIcon} />
      ),
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: (
        <HugeiconsIcon icon={AudioWave01Icon} />
      ),
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: (
        <HugeiconsIcon icon={CommandIcon} />
      ),
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "New Chat",
      url: "/dashboard/new-chat",
      icon: (
        <HugeiconsIcon icon={AiEditingFreeIcons} />
      ),
    },
    {
      title: "Home",
      url: "/dashboard",
      icon: (
        <HugeiconsIcon icon={Home11FreeIcons} />
      ),
      isActive: true,
    },
    {
      title: "Search",
      url: "/dashboard/search",
      icon: (
        <HugeiconsIcon icon={SearchIcon} />
      ),
    },
    {
      title: "Apps",
      url: "/dashboard/apps",
      icon: (
        <HugeiconsIcon icon={GridFreeIcons} />
      ),
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: (
        <HugeiconsIcon icon={Setting06FreeIcons} />
      ),
    },
  ],
  navSecondary: [
    {
      title: "What's new",
      url: "/dashboard/whats-new",
      icon: (
        <HugeiconsIcon icon={Megaphone03FreeIcons} />
      ),
    },
    {
      title: "Roadmap",
      url: "/dashboard/roadmap",
      icon: (
        <HugeiconsIcon icon={Road02FreeIcons} />
      ),
    },
    {
      title: "Feature Requests",
      url: "/dashboard/feature-requests",
      icon: (
        <HugeiconsIcon icon={SmilePlus} />
      ),
    },
    {
      title: "Trash",
      url: "/dashboard/trash",
      icon: (
        <HugeiconsIcon icon={Trash2} />
      ),
    },
  ],
  workspaces: [
    {
      name: "AI Productivity Agent",
      icon: (
        <HugeiconsIcon icon={LayerFreeIcons} className="text-purple-500" />
      ),
      pages: [
        {
          name: "Daily Goals",
          icon: <HugeiconsIcon icon={File01Icon} />,
          url: "/dashboard/ai-productivity-agent/daily-goals",
        },
        {
          name: "Task Logs",
          icon: <HugeiconsIcon icon={File01Icon} />,
          url: "/dashboard/ai-productivity-agent/task-logs",
        },
      ],
    },
    {
      name: "Professional Development",
      icon: (
        <HugeiconsIcon icon={LayerFreeIcons} className="text-blue-500" />
      ),
      pages: [
        {
          name: "Learning Paths",
          icon: <HugeiconsIcon icon={File01Icon} />,
          url: "/dashboard/professional-development/learning-paths",
        },
        {
          name: "Skill Matrix",
          icon: <HugeiconsIcon icon={File01Icon} />,
          url: "/dashboard/professional-development/skill-matrix",
        },
      ],
    },
    {
      name: "Creative Projects",
      icon: (
        <HugeiconsIcon icon={LayerFreeIcons} className="text-pink-500" />
      ),
      pages: [
        {
          name: "Ideas Board",
          icon: <HugeiconsIcon icon={File01Icon} />,
          url: "/dashboard/creative-projects/ideas-board",
        },
        {
          name: "Moodboards",
          icon: <HugeiconsIcon icon={File01Icon} />,
          url: "/dashboard/creative-projects/moodboards",
        },
      ],
    },
    {
      name: "Home Management",
      icon: (
        <HugeiconsIcon icon={LayerFreeIcons} className="text-green-500" />
      ),
      pages: [
        {
          name: "Chores List",
          icon: <HugeiconsIcon icon={File01Icon} />,
          url: "/dashboard/home-management/chores-list",
        },
        {
          name: "Grocery Plan",
          icon: <HugeiconsIcon icon={File01Icon} />,
          url: "/dashboard/home-management/grocery-plan",
        },
      ],
    },
    {
      name: "Travel & Adventure",
      icon: (
        <HugeiconsIcon icon={LayerFreeIcons} className="text-amber-500" />
      ),
      pages: [
        {
          name: "Itineraries",
          icon: <HugeiconsIcon icon={File01Icon} />,
          url: "/dashboard/travel-and-adventure/itineraries",
        },
        {
          name: "Bucket List",
          icon: <HugeiconsIcon icon={File01Icon} />,
          url: "/dashboard/travel-and-adventure/bucket-list",
        },
      ],
    },
  ],
}

type Workspace = (typeof data.workspaces)[0]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [workspaces, setWorkspaces] = React.useState<Workspace[]>(data.workspaces)
  const [dialogOpen, setDialogOpen] = React.useState(false)

  const handleAddWorkspace = (name: string) => {
    const newWorkspace: Workspace = {
      name,
      icon: <HugeiconsIcon icon={FolderOpenIcon} className="text-indigo-400" strokeWidth={2} />,
      pages: [],
    }
    setWorkspaces((prev) => [...prev, newWorkspace])
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

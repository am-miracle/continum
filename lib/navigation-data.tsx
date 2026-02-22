import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
    CommandIcon,
    AudioWave01Icon,
    SearchIcon,
    File01Icon,
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

export interface Page {
    name: string
    icon: React.ReactNode
    url: string
}

export interface Workspace {
    name: string
    slug: string
    icon: React.ReactNode
    pages: Page[]
    url?: string
}

export interface Team {
    name: string
    logo: React.ReactNode
    plan: string
}

export interface NavigationData {
    teams: Team[]
    navMain: {
        title: string
        url: string
        icon: React.ReactNode
        isActive?: boolean
    }[]
    navSecondary: {
        title: string
        url: string
        icon: React.ReactNode
    }[]
    workspaces: Workspace[]
}

export const navigationData: NavigationData = {
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
            slug: "ai-productivity-agent",
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
            slug: "professional-development",
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
            slug: "creative-projects",
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
            slug: "home-management",
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
            slug: "travel-and-adventure",
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

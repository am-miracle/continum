"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowDown01Icon, GiftIcon, UnfoldLessIcon } from "@hugeicons/core-free-icons"
import { navigationData } from "@/lib/navigation-data"

export function DashboardHeader() {
    const pathname = usePathname()

    const isMainPage = pathname === "/dashboard" || pathname === "/dashboard/new-chat" || pathname === "/dashboard/search"

    const segments = pathname.split("/").filter(Boolean).slice(1) // Remove 'dashboard' prefix

    const workspace = navigationData.workspaces.find(w => w.slug === segments[0])
    const page = workspace?.pages.find(p => p.url === pathname)

    const formatSegment = (str: string) => {
        return str.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())
    }

    return (
        <>
            {isMainPage ? (
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="ghost" className="gap-2 font-medium text-muted-foreground hover:text-foreground">
                            Default model <HugeiconsIcon icon={ArrowDown01Icon} className="h-4 w-4" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-56 p-2" align="start">
                        <div className="flex flex-col gap-1">
                            <Button variant="ghost" className="justify-start">Default model</Button>
                            <Button variant="ghost" className="justify-start">GPT-4</Button>
                            <Button variant="ghost" className="justify-start">Claude 3.5 Sonnet</Button>
                        </div>
                    </PopoverContent>
                </Popover>
            ) : workspace && page ? (
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <span className="flex items-center gap-1.5 text-sm font-medium">
                                {workspace.name}
                            </span>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>/</BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="h-auto gap-1.5 p-0 text-sm font-medium text-foreground hover:bg-transparent">
                                        <span className="flex items-center gap-1.5">
                                            {page.name}
                                        </span>
                                        <HugeiconsIcon icon={UnfoldLessIcon} className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-64" align="start">
                                    {workspace.pages.map((p: { name: string; url: string }) => (
                                        <DropdownMenuItem key={p.url} asChild>
                                            <Link href={p.url} className="flex items-center gap-2">
                                                <span className="flex-1">{p.name}</span>
                                                {p.url === pathname && (
                                                    <div className="bg-primary h-1.5 w-1.5 rounded-full" />
                                                )}
                                            </Link>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            ) : (
                <Breadcrumb>
                    <BreadcrumbList>
                        {segments.length === 0 ? (
                            <BreadcrumbItem>
                                <BreadcrumbPage>Dashboard</BreadcrumbPage>
                            </BreadcrumbItem>
                        ) : segments.map((segment, index) => {
                            const isLast = index === segments.length - 1
                            return (
                                <React.Fragment key={segment}>
                                    <BreadcrumbItem>
                                        {isLast ? (
                                            <BreadcrumbPage className="line-clamp-1">
                                                {formatSegment(segment)}
                                            </BreadcrumbPage>
                                        ) : (
                                            <BreadcrumbLink href={`/dashboard/${segments.slice(0, index + 1).join("/")}`} className="line-clamp-1">
                                                {formatSegment(segment)}
                                            </BreadcrumbLink>
                                        )}
                                    </BreadcrumbItem>
                                    {!isLast && <BreadcrumbSeparator>/</BreadcrumbSeparator>}
                                </React.Fragment>
                            )
                        })}
                    </BreadcrumbList>
                </Breadcrumb>
            )}

            <div className="ms-auto flex items-center gap-2 px-3">
                {pathname === "/dashboard" ? (
                    <Button variant="secondary" className="gap-2 bg-secondary text-foreground hover:bg-secondary/80 cursor-pointer shadow-none">
                        <HugeiconsIcon icon={GiftIcon} strokeWidth={2} className="h-4 w-4" />
                        Get pro
                    </Button>
                ) : (
                    <SidebarTrigger />
                )}
            </div>
        </>
    )
}

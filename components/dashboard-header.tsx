"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
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
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowDown01Icon, GiftIcon } from "@hugeicons/core-free-icons"

export function DashboardHeader() {
    const pathname = usePathname()

    const isMainPage = pathname === "/dashboard" || pathname === "/dashboard/new-chat" || pathname === "/dashboard/search"

    const segments = pathname.split("/").filter(Boolean).slice(1) // Remove 'dashboard' prefix

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
                                    {!isLast && <BreadcrumbSeparator />}
                                </React.Fragment>
                            )
                        })}
                    </BreadcrumbList>
                </Breadcrumb>
            )}

            <div className="ms-auto flex items-center gap-2 px-3">
                {isMainPage && (
                    <Button variant="secondary" className="gap-2 bg-secondary text-foreground hover:bg-secondary/80 cursor-pointer shadow-none">
                        <HugeiconsIcon icon={GiftIcon} strokeWidth={2} className="h-4 w-4" />
                        Get pro
                    </Button>
                )}
            </div>
        </>
    )
}

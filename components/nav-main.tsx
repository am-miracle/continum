"use client"

import { usePathname } from "next/navigation"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon: React.ReactNode
    isActive?: boolean
  }[]
}) {
  const pathname = usePathname()

  return (
    <SidebarMenu>
      {items.map((item) => {
        const isActive =
          item.url === "/dashboard"
            ? pathname === "/dashboard"
            : pathname.startsWith(item.url)

        return (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild isActive={isActive}>
              <Link href={item.url}>
                {item.icon}
                <span className="font-normal! text-sm!">{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        )
      })}
    </SidebarMenu>
  )
}


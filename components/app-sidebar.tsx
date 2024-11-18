import * as React from "react"

import { SearchForm } from "@/components/search-form"
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { GoPencil } from "react-icons/go";


// This is sample data.
const data = {
  versions: ["Frontend Design", "Backend end", "Log out"],
  navMain: [
    {
      title: "Members",
      items: [
        {
          title: "John Parker",
          url: "#",
        },
        {
          title: "Smith Peter",
          url: "#",
        },
      ],
    },
    {
      title: "Tools",
      items: [
        {
          id: 1,
          title: "Installation",
        },
        {
          id: 2,
          title: "Project Structure",
        },
        {
          id: 3,
          title: "Installation",
        },
        {
          id: 4,
          title: "Project Structure",
        },
        {
          id: 5,
          title: "Installation",
        },
        {
          id: 6,
          title: "Project Structure",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          item.title === "Members"?
          <SidebarGroup key={item.title}>
          <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        {item.title}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          :
          <SidebarGroup key={item.title}>
          <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <section className="flex justify-center items-center gap-5 flex-wrap">
                {item.items.map((item) => (
                  <GoPencil key={item.id} size={45} className="hover:bg-zinc-700 cursor-pointer p-2"/>
                ))}
                </section>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

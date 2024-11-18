import { AppSidebar } from "@/components/app-sidebar"
import MobileToolbar from "@/components/MobileToolbar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

function boardPage() {


  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <MobileToolbar />
        </header>
        <div className="flex p-1">
          <canvas id="myCanvas" className="w-full h-full border-2 border-solid border-slate-400">
          </canvas>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default boardPage
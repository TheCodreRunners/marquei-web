import { SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./sidebar"

export const AppLayout = ({  }: { children: React.ReactNode }) => {
    return (
        <><AppSidebar />

            <SidebarTrigger className="m-5 sm:hidden" />
        </>
    )
}


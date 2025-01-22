import { SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./sidebar"

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <><AppSidebar>
    
            {children}
            </AppSidebar>
            <SidebarTrigger className="m-5 sm:hidden" />
        </>
    )
}


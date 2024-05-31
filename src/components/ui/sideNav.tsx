
import { Button } from "@/components/ui/button"
import {
  Bell,
  LineChart,
  HandCoins,
  Building2,
  Waypoints,
} from "lucide-react"

function SideNav() {
  return (
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <div className="flex items-center gap-2 font-semibold">
              <Building2 className="h-6 w-6" />
              <span className="">SIPD HUB</span>
            </div>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">

              <div
                
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
              >
                <LineChart className="h-4 w-4" />
                Analytics{" "}
              </div>
              <div
                
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Waypoints className="h-4 w-4" />
                Integrasi
              </div>
              <div
                
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Waypoints className="h-4 w-4" />
                Integrasi Daerah
              </div>
              <div
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <HandCoins className="h-4 w-4" />
                Anggaran
              </div>
            </nav>
          </div>
        </div>
  );
}

export default SideNav;

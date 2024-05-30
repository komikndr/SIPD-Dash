import SideNav from "@/components/ui/sideNav"
import Header from "@/components/ui/header"
import Main from "@/components/ui/main"

import fetchDataFromOpenSearch from "@/lib/opensearch"
export default function Home() {
    let k = fetchDataFromOpenSearch();  
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
      <SideNav />
      </div>

      <div className="flex flex-col">
        <Header />
        <Main />
      </div>
    </div>
  )
}

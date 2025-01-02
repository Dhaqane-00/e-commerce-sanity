import Link from "next/link"

import { TopBar } from "@/components/header/top-bar"
import { MainNav } from "@/components/header/main-nav"
import { SearchBar } from "@/components/header/search-bar"
import { UserNav } from "@/components/header/user-nav"

export function SiteHeader() {
  return (
    <header className="w-full border-b">
      <TopBar />
      
      {/* Main header */}
      <div className="container flex h-20 flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:gap-0">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">TeeSpace</span>
        </Link>
        <SearchBar />
        <UserNav className="hidden sm:flex" />
      </div>

      {/* Navigation */}
      <div className="container flex h-14 items-center justify-between px-4">
        <MainNav />
        <div className="hidden items-center gap-2 sm:flex">
          <span className="text-sm font-medium">🔥 Extra</span>
          <span className="text-sm font-medium text-green-500">Sale 30%</span>
          <span className="text-sm font-medium">off</span>
        </div>
      </div>
    </header>
  )
}


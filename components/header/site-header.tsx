import Link from "next/link"
import { TopBar } from "@/components/header/top-bar"
import { MainNav } from "@/components/header/main-nav"
import { SearchBar } from "@/components/header/search-bar"
import { UserNav } from "@/components/header/user-nav"
import { MobileMenu } from "@/components/header/mobile-menu"

export function SiteHeader() {
  return (
    <header className="w-full border-b px-10 sm:px-4">
      {/* TopBar hidden on mobile */}
      <div className="hidden sm:block">
        <TopBar />
      </div>
      
      {/* Main header */}
      <div className="container flex h-14 sm:h-16 items-center justify-between px-2 sm:px-4">
        <div className="flex items-center gap-2">
          <MobileMenu />
          <Link href="/" className="flex items-center">
            <span className="text-base sm:text-lg font-bold">TeeSpace</span>
          </Link>
        </div>
        <div className="hidden sm:block flex-1 mx-4">
          <SearchBar />
        </div>
        <UserNav />
      </div>

      {/* Navigation and extras - hidden on mobile */}
      <div className="hidden sm:block">
        <div className="container flex h-10 items-center justify-between px-4">
          <MainNav />
          <div className="items-center gap-2 flex">
            <span className="text-xs font-medium">🔥 Extra</span>
            <span className="text-xs font-medium text-green-500">Sale 30%</span>
            <span className="text-xs font-medium">off</span>
          </div>
        </div>
      </div>
    </header>
  )
}


"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SearchBar } from "./search-bar"
import { MobileNav } from "./mobile-nav"

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="sm:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:hidden">
        <div className="flex flex-col gap-6 py-4">
          <SearchBar />
          <MobileNav />
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium">🔥 Extra</span>
            <span className="text-xs font-medium text-green-500">Sale 30%</span>
            <span className="text-xs font-medium">off</span>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
} 
import { Search } from 'lucide-react'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SearchBar() {
  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <Input
        type="search"
        placeholder="Search..."
        className="w-full"
      />
      <Button variant="default" size="icon">
        <Search className="h-4 w-4" />
        <span className="sr-only">Search</span>
      </Button>
    </div>
  )
}


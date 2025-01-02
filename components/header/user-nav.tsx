import Link from "next/link"
import { Phone, ShoppingCart } from 'lucide-react'
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

import { Badge } from "@/components/ui/badge"

export function UserNav({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="flex items-center gap-2">
        <Phone className="h-4 w-4" />
        <div className="flex flex-col">
          <span className="text-sm font-medium">Hotline: 19008188</span>
          <span className="text-xs text-muted-foreground">
            Pickup your order for free
          </span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <button className="hover:text-primary">
              <span className="sr-only">Account</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 1 0-16 0" />
              </svg>
            </button>
          </SignInButton>
        </SignedOut>
        <Link href="/cart" className="relative hover:text-primary">
          <span className="sr-only">Cart</span>
          <ShoppingCart className="h-6 w-6" />
          <Badge
            variant="destructive"
            className="absolute -right-2 -top-2 h-5 w-5 rounded-full p-0 text-xs"
          >
            0
          </Badge>
        </Link>
      </div>
    </div>
  )
}


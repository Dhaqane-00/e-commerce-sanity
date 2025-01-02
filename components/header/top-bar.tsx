import Link from "next/link"
import { MapPin } from 'lucide-react'

import { socialLinks } from "@/config/nav"

export function TopBar() {
  return (
    <div className="container flex h-10 items-center justify-between border-b text-sm">
      <div className="flex items-center gap-2">
        <MapPin className="h-4 w-4" />
        <Link href="/store-locator" className="hover:underline">
          Find a Store
        </Link>
      </div>
      <div className="flex items-center gap-4">
        {socialLinks.map((social) => (
          <Link
            key={social.label}
            href={social.href}
            className="hover:text-primary"
          >
            <social.icon className="h-4 w-4" />
            <span className="sr-only">{social.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}


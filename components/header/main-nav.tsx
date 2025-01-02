"use client"

import Link from "next/link"

import { mainNav } from "@/config/nav"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="font-medium text-green-500">
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {mainNav.map((section) => (
          <NavigationMenuItem key={section.title}>
            <NavigationMenuTrigger>{section.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                {section.items.map((item) => (
                  <Link 
                    key={item.title} 
                    href={item.href || ""} 
                    className="block hover:bg-muted p-2 rounded-md transition-colors"
                  >
                    <div className="grid gap-1">
                      <h3 className="text-sm font-medium">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <Link href="/blog" legacyBehavior passHref>
            <NavigationMenuLink>Blog</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}


"use client"

import Link from "next/link"
import { mainNav } from "@/config/nav"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function MobileNav() {
  return (
    <div className="flex flex-col space-y-2">
      <Link href="/" className="font-medium text-green-500 px-2 py-1.5">
        Home
      </Link>
      <Accordion type="single" collapsible className="w-full">
        {mainNav.map((section) => (
          <AccordionItem key={section.title} value={section.title}>
            <AccordionTrigger className="px-2">{section.title}</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col space-y-2 px-2 py-1">
                {section.items.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href || ""}
                    className="text-sm hover:text-primary"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Link href="/blog" className="px-2 py-1.5">
        Blog
      </Link>
    </div>
  )
} 
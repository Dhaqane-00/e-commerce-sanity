import { NavSection, SocialLink } from "@/types/nav"
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

export const mainNav: NavSection[] = [
  {
    title: "TeeSpace",
    items: [
      {
        title: "About Us",
        description: "Learn more about our story and mission",
        href: "/about",
      },
      {
        title: "Careers",
        description: "Join our team and make a difference",
        href: "/careers",
      },
    ],
  },
  {
    title: "Shop",
    items: [
      {
        title: "New Arrivals",
        description: "Check out our latest collection",
        href: "/new-arrivals",
      },
      {
        title: "Best Sellers",
        description: "Our most popular items",
        href: "/best-sellers",
      },
    ],
  },
  {
    title: "Pages",
    items: [
      {
        title: "About",
        description: "Learn about our company",
        href: "/about",
      },
      {
        title: "Contact",
        description: "Get in touch with us",
        href: "/contact",
      },
    ],
  },
]

export const socialLinks: SocialLink[] = [
  {
    href: "https://twitter.com",
    icon: Twitter,
    label: "Twitter",
  },
  {
    href: "https://facebook.com",
    icon: Facebook,
    label: "Facebook",
  },
  {
    href: "https://instagram.com",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "https://youtube.com",
    icon: Youtube,
    label: "YouTube",
  },
]


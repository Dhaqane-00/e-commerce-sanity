export interface NavItem {
  title: string
  href?: string
  description?: string
  content?: React.ReactNode
}

export interface NavSection {
  title: string
  items: NavItem[]
}

export interface SocialLink {
  href: string
  icon: React.ComponentType<{ className?: string }>
  label: string
}


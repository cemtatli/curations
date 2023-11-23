export interface RootLayoutProps {
  children: React.ReactNode
}
export interface NavbarProps {
  categories?: {
    title: string
    slug: string
    id: string
    color?: string
  }
}

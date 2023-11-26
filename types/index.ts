export interface RootLayoutProps {
  children: React.ReactNode
}

export interface LogoProps {
  size: number
  className?: string
}
export interface NavbarProps {
  header: {
    name: string
    slug: { current: string }
    _id: string
    color: string
    subCategories: {
      name: string
      description: string
      slug: { current: string }
      _id: string
      color: string
    }[]
  }[]
}

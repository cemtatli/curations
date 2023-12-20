export type LogoProps = {
  size: number
  className?: string
}
export type NavbarProps = {
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

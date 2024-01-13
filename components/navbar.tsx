'use client'

import { NavbarProps } from '@/types'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuListItem,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

const Navbar: React.FC<NavbarProps> = ({ header }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="w-[45rem] max-md:hidden">
        {header.map(category => (
          <NavigationMenuItem key={category._id}>
            <NavigationMenuTrigger>{category.name}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-4 p-4 md:w-[35rem] md:grid-cols-2 lg:w-[45rem]">
                {category.subCategories.map(subcategory => (
                  <NavigationMenuListItem
                    key={subcategory._id}
                    title={subcategory.name}
                    href={`?categories=${category.slug.current}&subcategory=${subcategory.slug.current}`}>
                    {subcategory?.description}
                  </NavigationMenuListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Navbar

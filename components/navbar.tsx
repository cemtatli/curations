'use client'
import { NavbarProps } from '@/types'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

import ListItem from '@/components/navbar-item'

const Navbar: React.FC<NavbarProps> = ({ header }) => {
  console.log(header[0].subCategories[0].slug.current)
  return (
    <NavigationMenu>
      <NavigationMenuList className="w-[45rem]">
        {header.map(category => (
          <NavigationMenuItem key={category._id}>
            <NavigationMenuTrigger>{category.name}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-4 p-4 md:w-[35rem] md:grid-cols-2 lg:w-[45rem]">
                {category.subCategories.map(subcategory => (
                  <ListItem
                    key={subcategory._id}
                    title={subcategory.name}
                    href={`?categories=${category.slug.current}&subcategory=${subcategory.slug.current}`}>
                    {subcategory?.description}
                  </ListItem>
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

import { categories } from '@/data'
import { NavbarProps } from '@/types'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

import ListItem from '@/components/navbar-item'

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="w-[45rem]">
        {categories.map(category => {
          return (
            <NavigationMenuItem key={category.id}>
              <NavigationMenuTrigger>{category.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-4 p-4 md:w-[35rem] md:grid-cols-2 lg:w-[45rem]">
                  {category.subcategories.map(subcategory => {
                    return (
                      <ListItem
                        key={subcategory.title}
                        title={subcategory.title}
                        href={`?categories=${category.id}&subcategory=${subcategory.id}`}>
                        {subcategory?.description}
                      </ListItem>
                    )
                  })}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Navbar

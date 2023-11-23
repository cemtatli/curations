import { categories } from '@/data'
import { NavbarProps } from '@/types'
import Link from 'next/link'

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav>
      <ul className="flex items-center justify-between gap-x-5">
        {categories.map(category => {
          return (
            <li key={category.id}>
              <Link href={`?category=${category.id}`} className="text-sm font-semibold">
                {category.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar

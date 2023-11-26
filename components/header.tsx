import Logo from '@/components/logo'

import Navbar from '@/components/navbar'
import Link from 'next/link'
import AddBookmarkModal from '@/components/add-bookmark'
import { getHeader } from '@/sanity/lib/sanity-utils'

const getData = async () => {
  const header = await getHeader()
  return header
}

const Header = async () => {
  const header = await getData()
  return (
    <header className="flex h-20 w-full items-center justify-between px-8 md:px-20">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center justify-center gap-x-1 bg-gradient-to-tr font-handwriting font-semibold">
          <Logo size={26} />
        </Link>
      </div>
      <Navbar header={header} />
      <AddBookmarkModal />
    </header>
  )
}
export default Header

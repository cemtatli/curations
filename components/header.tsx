'use client'

import Logo from '@/components/logo'

import Navbar from '@/components/navbar'
import Link from 'next/link'
import AddBookmarkModal from '@/components/add-bookmark'

const Header = () => {
  return (
    <header className="flex h-20 w-full items-center justify-between px-8 md:px-20">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center justify-center gap-x-1 bg-gradient-to-tr font-handwriting font-semibold">
          <Logo size={24} />
        </Link>
      </div>
      <Navbar />
      <AddBookmarkModal />
    </header>
  )
}
export default Header

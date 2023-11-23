'use client'

import Logo from '@/components/logo'

import Navbar from '@/components/navbar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex h-16 w-full items-center justify-between px-8 md:px-20">
      <>
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-handwriting flex items-center justify-center gap-x-1 bg-gradient-to-tr font-semibold">
            <Logo size={16} />
            curations
          </Link>
        </div>
        <Navbar />
        <Button variant="epigra">Add your bookmark</Button>
      </>
    </header>
  )
}
export default Header

'use client'

import Logo from '@/components/logo'
import ThemeToggleButton from '@/components/theme-button'
import Navbar from '@/components/navbar'

const Header = () => {
  return (
    <header className="flex h-16 w-full items-center justify-between px-8 md:px-20">
      <>
        <div className="flex items-center justify-between">
          <p className="font-handwriting flex items-center justify-center gap-x-1 font-semibold">
            <Logo size={16} />
            curations
          </p>
        </div>
        <Navbar />
        <ThemeToggleButton />
      </>
    </header>
  )
}
export default Header

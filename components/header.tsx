'use client'

import Logo from '@/components/logo'
import Container from '@/components/container'
import ThemeToggleButton from '@/components/theme-button'

const Header = () => {
  return (
    <header className="flex h-16 items-center justify-start border-b">
      <Container>
        <div className="flex items-center justify-between">
          <p className="font-handwriting flex items-center justify-center gap-x-2 font-semibold text-epigra">
            <Logo size={16} />
            <div> curations</div>
          </p>
          <ThemeToggleButton />
        </div>
      </Container>
    </header>
  )
}
export default Header

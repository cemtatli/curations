import { getHeader } from '@/sanity/lib/sanity-utils'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Logo from '@/components/logo'
import { Button } from './ui/button'
import { Link as Localization } from '@/navigation'
import AddBookmark from '@/components/add-bookmark'

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

      <div className="flex-end flex items-center gap-x-2">
        <Localization locale={'tr'} href={'/'}>
          <Button variant="outline">TR</Button>
        </Localization>
        <Localization locale={'en'} href={'/'}>
          <Button variant="outline">EN</Button>
        </Localization>
        <AddBookmark />
      </div>
    </header>
  )
}
export default Header

import Link from 'next/link'
import { getHeader } from '@/sanity/lib/sanity-utils'

import DrawerModal from '@/components/ui/drawer'
import Navbar from '@/components/navbar'
import SubmitLinkForm from '@/components/form'
import Logo from '@/components/logo'

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
      <DrawerModal trigger="Add">
        <div className="mt-14 flex flex-col gap-10">
          <p className="text-center">
            Each link that is submitted will be reviewed. And if it’s good, it will be featured on Curations.
          </p>
          <SubmitLinkForm />
        </div>
      </DrawerModal>
    </header>
  )
}
export default Header

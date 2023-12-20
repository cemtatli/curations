import DrawerModal from '@/components/ui/drawer'
import AddBookmarkForm from '@/components/form'

type Props = {}

export default function AddBookmark({}: Props) {
  return (
    <DrawerModal trigger="Submit Link">
      <div className="relative w-full rounded-md border border-dashed p-5">
        <h1 className="inline-block w-full text-center text-lg font-semibold">Submit a link</h1>
        <div className="mt-8 flex flex-col gap-12">
          <p className="text-center text-sm">
            Each link that is submitted will be reviewed. And if it’s good, it will be featured on Curations.
          </p>
          <AddBookmarkForm />
        </div>
      </div>
    </DrawerModal>
  )
}

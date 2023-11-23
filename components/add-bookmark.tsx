'use client'

import { Drawer } from 'vaul'
import { Button } from '@/components/ui/button'

const AddBookmarkModal = () => {
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <Button variant="epigra">Add Bookmark</Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-10 bg-muted-foreground/50 backdrop-blur" />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 z-30 mt-24 flex h-[95%] flex-col rounded-t-xl">
          <div className="flex-1 rounded-t-xl bg-white p-4">
            <div className="mx-auto mb-8 h-1.5 w-12 flex-shrink-0 rounded-full bg-zinc-300" />
            <div className="mx-auto max-w-md">
              <Drawer.Title className="mb-4 font-medium">Unstyled drawer for React.</Drawer.Title>
              <p className="mb-2 text-zinc-600">
                This component can be used as a replacement for a Dialog on mobile and tablet devices.
              </p>
              <p className="mb-8 text-zinc-600">
                It uses{' '}
                <a
                  href="https://www.radix-ui.com/docs/primitives/components/dialog"
                  className="underline"
                  target="_blank">
                  Radix&apos;s Dialog primitive
                </a>{' '}
                under the hood and is inspired by{' '}
                <a
                  href="https://twitter.com/devongovett/status/1674470185783402496"
                  className="underline"
                  target="_blank">
                  this tweet.
                </a>
              </p>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}

export default AddBookmarkModal

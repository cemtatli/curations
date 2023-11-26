'use client'

import { Drawer } from 'vaul'
import { Button } from '@/components/ui/button'

const DrawerModal = ({ title, trigger, children }: { title?: string; trigger: string; children: React.ReactNode }) => {
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <Button variant="epigra"> {trigger}</Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-10 bg-muted-foreground/10 backdrop-blur-sm" />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 z-30 mt-24 flex h-[95%] flex-col rounded-t-xl">
          <div className="flex-1 rounded-t-xl bg-white p-4">
            <div className="mx-auto mb-8 h-1.5 w-12 flex-shrink-0 rounded-full bg-zinc-300" />
            <div className="mx-auto max-w-md">
              <Drawer.Title className="mb-4 font-medium">{title}</Drawer.Title>
              {children}
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}

export default DrawerModal

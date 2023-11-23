'use client'

import * as React from 'react'
import { MoonIcon, SunIcon, DesktopIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useWindowSize } from '@uidotdev/usehooks'

const ThemeToggleButton = () => {
  const { setTheme } = useTheme()
  const size = useWindowSize()

  const settings = [
    {
      theme: 'light',
      name: 'Light',
      icon: <SunIcon />,
    },
    {
      theme: 'dark',
      name: 'Dark',
      icon: <MoonIcon />,
    },
    {
      theme: 'system',
      name: 'System',
      icon: <DesktopIcon />,
    },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <SunIcon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={size?.width && size.width > 768 ? 'center' : 'end'}
        className="min-w-[6.5rem] text-xs font-medium sm:text-sm">
        {settings.map(mode => (
          <DropdownMenuItem
            key={mode.theme}
            className="flex cursor-pointer items-center gap-x-2"
            onClick={() => setTheme(mode.theme)}>
            {mode.icon} {mode.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ThemeToggleButton

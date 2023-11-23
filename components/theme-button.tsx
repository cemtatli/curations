'use client';

import * as React from 'react';
import { MoonIcon, SunIcon, DesktopIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const ThemeToggleButton = () => {
	const { setTheme } = useTheme();

	const settings = [
		{
			mode: 'light',
			name: 'Light',
			icon: <SunIcon />,
		},
		{
			mode: 'dark',
			name: 'Dark',
			icon: <MoonIcon />,
		},
		{
			mode: 'system',
			name: 'System',
			icon: <DesktopIcon />,
		},
	];

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='ghost' size='icon'>
					<SunIcon className='h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
					<MoonIcon className='absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
					<span className='sr-only'>Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='center' className='text-xs sm:text-sm font-medium min-w-[6.5rem]'>
				{settings.map(mode => (
					<DropdownMenuItem
						key={mode.mode}
						className='flex items-center gap-x-2 cursor-pointer'
						onClick={() => setTheme(mode.mode)}>
						{mode.icon} {mode.name}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default ThemeToggleButton;

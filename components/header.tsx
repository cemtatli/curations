'use client';

import Logo from '@/components/logo';
import Container from '@/components/container';
import ThemeToggleButton from '@/components/theme-button';

const Header = () => {
	return (
		<header className='h-16 flex items-center justify-start border-b'>
			<Container>
				<div className='flex items-center justify-between'>
					<Logo size={28} className='text-epigra' />
					<ThemeToggleButton />
				</div>
			</Container>
		</header>
	);
};
export default Header;

import Logo from '@/components/logo';
import Container from '@/components/container';

const Header = () => {
	return (
		<header className='h-16 flex items-center justify-start border-b'>
			<Container>
				<Logo size={28} />
			</Container>
		</header>
	);
};
export default Header;

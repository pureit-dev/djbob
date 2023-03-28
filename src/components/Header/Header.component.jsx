import { NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import './Header.style.css';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const ref = useRef();

	useEffect(() => {
		const checkIfClickedOutside = (event) => {
			if (
				isMenuOpen &&
				ref.current &&
				!ref.current.contains(event.target)
			) {
				setIsMenuOpen(false);
			}
		};

		document.addEventListener('mousedown', checkIfClickedOutside);

		return () => {
			document.removeEventListener('mousedown', checkIfClickedOutside);
		};
	}, [isMenuOpen]);

	return (
		<nav>
			<img
				className='header-logo'
				src='../../logo.png'
				alt='DJ Bob green logo with headphones and a play button'
			></img>
			{isMenuOpen ? (
				<div className='header-container' ref={ref}>
					<i
						className='fa-solid fa-x header-icon'
						onClick={() => setIsMenuOpen((oldstate) => !oldstate)}
					></i>

					<div className='links-container'>
						<NavLink to={'/'} className='navlink'>
							Home
						</NavLink>
						<NavLink to={'reviews'} className='navlink'>
							Reviews
						</NavLink>
						<NavLink to={'previousevents'} className='navlink'>
							Previous Events
						</NavLink>
						<NavLink to={'booking'} className='navlink'>
							Book DJ Bob
						</NavLink>
						<NavLink to={'about'} className='navlink'>
							About DJ Bob
						</NavLink>
						<NavLink to={'contactus'} className='navlink'>
							Contact Us
						</NavLink>
					</div>
				</div>
			) : (
				<div className='header-container nobackground' ref={ref}>
					<i
						className='fa-solid fa-bars fa-lg header-icon'
						onClick={() => setIsMenuOpen((oldstate) => !oldstate)}
					></i>
				</div>
			)}
		</nav>
	);
};

export default Header;

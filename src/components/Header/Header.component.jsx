import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Header.style.css';

const Header = () => {
	const [isShown, setIsShown] = useState(false);

	const clickHamburger = () => {
		setIsShown(!isShown);
	};

	return (
		<nav>
			<img
				className='header-logo'
				src='../../logo.png'
				alt='DJ Bob green logo with headphones and a play button'
			></img>
			<div className='header-container'>
				<i className='fa-solid fa-bars fa-lg header-icon' onClick={clickHamburger}></i>
				{isShown && (
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
				)}
			</div>
		</nav>
	);
};

export default Header;

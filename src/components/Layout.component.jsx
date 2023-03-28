import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header.component';
import Footer from '../components/Footer/Footer.component';

export default function Layout() {
	return (
		<div className='site-wrapper'>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

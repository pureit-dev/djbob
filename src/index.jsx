import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Contact from './components/Contact/Contact.component';
import Reviews, {loader} from './components/Reviews/Reviews.component';
import About from './components/About/About.component';
import BookingForm from './components/BookingForm/BookingForm.component';
import Layout from './components/Layout.component';
import PreviousEvents from './components/PreviousEvents/PreviousEvents.component';

import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Layout />}>
			<Route path='contactus' element={<Contact />} />
			<Route path='reviews' loader={loader} element={<Reviews />} />
			<Route path='about' element={<About />} />
			<Route path='booking' element={<BookingForm />} />
			<Route path='previousevents' element={<PreviousEvents />} />
		</Route>
	)
);

function App() {
	return (
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	);
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

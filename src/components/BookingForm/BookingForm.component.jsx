import './BookingForm.style.css';
import { useState } from 'react';

const BookingForm = () => {
	const [formInput, setFormInput] = useState({});
	return (
		<>
			<h1>Book DJ Bob</h1>
			<form className='booking-form'>
				<label>Name</label>
				<input type='text'></input>
				<label>Email</label>
				<input type='email'></input>
				<label>Phone</label>
				<input type='tel'></input>
				<label>Date of event</label>
				<input type='date'></input>
                <label>Tell us about the event</label>
                <textarea></textarea>
			</form>
		</>
	);
};

export default BookingForm;

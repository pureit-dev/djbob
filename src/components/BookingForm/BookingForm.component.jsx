import './BookingForm.style.css';
import { useState } from 'react';
import Form from '../Form/Form.component';

const BookingForm = () => {
	const formConfig = [
		{ label: 'Name', type: 'text' },
		{ label: 'Email', type: 'email' },
		{ label: 'Password', type: 'password' },
		{ label: 'Submit', type: 'button' }
	  ];
	  
	  // ...
	  
	  <Form config={formConfig} />
	  
	return (
		<>
			<h1>Book DJ Bob</h1>
			<Form config={formConfig} />
		</>
	);
};

export default BookingForm;

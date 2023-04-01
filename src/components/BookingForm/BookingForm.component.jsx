import './BookingForm.style.css';
import { useState } from 'react';
import Form from '../Form/Form.component';

const BookingForm = () => {
	const [formInput, setFormInput] = useState({});
	return (
		<>
			<h1>Book DJ Bob</h1>
			<Form />
		</>
	);
};

export default BookingForm;

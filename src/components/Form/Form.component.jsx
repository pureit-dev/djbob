import './Form.style.css';
import { useState } from 'react';
import FormInput from './FormInput.component';
import Button from '../Button/Button.component';


const Form = () => {

	return (
		<form className='booking-form'>
			<FormInput
				label='Name'
				type={'text'}
				placeholder={'Enter your name'}
			/>
			<FormInput
				label='Email'
				type={'email'}
				placeholder={'Enter your email address'}
			/>
			<FormInput
				label='Review'
				type={'textarea'}
				placeholder={'Tell us about your experience with us'}
			/>
			<Button btnText='Submit' />
		</form>
	);
};

export default Form;

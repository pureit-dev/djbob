import './FormInput.style.css';
import { useState } from 'react';

function FormInput(props) {
	const { label, type, placeholder } = props;

	const [value, setValue] = useState('');
	const onChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<div className='FormInput'>
			<label>{label}</label>
			{type === 'textarea' ? (
				<textarea
					value={value}
					placeholder={placeholder}
					onChange={onChange}
				/>
			) : (
				<input
					type={type}
					value={value}
					placeholder={placeholder}
					onChange={onChange}
				/>
			)}
		</div>
	);
}

export default FormInput;

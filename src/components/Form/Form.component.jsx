import React, { useState } from 'react';
import './Form.style.css';

const FormField = ({ label, type, value, setValue, className }) => (
	<div className={className}>
		<label>{label}</label>
		<input
			type={type}
			value={value}
			onChange={(e) => setValue(e.target.value)}
		/>
	</div>
);

const FormRadio = ({ label, values, setValue, className, name, text }) => (
	<div className={className}>
		{values.map((option, index) => (
			<React.Fragment key={index}>
				<input
					type='radio'
					name={name}
					id={option}
					value={option}
					onChange={(e) => setValue(e.target.value)}
				/>

				<label htmlFor={option} label={label}>
					{text}
				</label>
			</React.Fragment>
		))}
	</div>
);

const FormTextArea = ({ label, value, setValue, className, placeholder }) => (
	<div className={className}>
		<label>{label}</label>
		<textarea
			placeholder={placeholder}
			value={value}
			onChange={(e) => setValue(e.target.value)}
		/>
	</div>
);

const FormButton = ({ label, onClick, className }) => (
	<button className={className} onClick={onClick}>
		{label}
	</button>
);

export default function Form({ config, onClick }) {
	const [formState, setFormState] = useState(
		config.reduce((acc, item) => ({ ...acc, [item.label]: '' }), {})
	);

	const updateFormState = (label) => (value) => {
		setFormState((prevState) => ({ ...prevState, [label]: value }));
	};

	return (
		<form>
			<div className='form-layout'>
				{config.map((item, index) => {
					switch (item.type) {
						case 'button':
							return (
								<FormButton
									key={item.label}
									label={item.label}
									className={item.className}
									onClick={() => onClick(formState)}
								/>
							);
						case 'textarea':
							return (
								<FormTextArea
									key={item.label}
									label={item.label}
									value={formState[item.label]}
									placeholder={item.placeholder}
									className={item.className}
									setValue={updateFormState(item.label)}
								/>
							);
						case 'radio':
							return (
								<FormRadio
									key={index}
									text={item.text}
									label={item.label}
									values={item.values}
									value={formState[item.label]}
									setValue={updateFormState(item.label)}
									className={item.className}
									name={item.name}
									id={formState[item.label]}
								/>
							);
						default:
							return (
								<FormField
									key={item.label}
									className={item.className}
									label={item.label}
									type={item.type}
									value={formState[item.label]}
									setValue={updateFormState(item.label)}
								/>
							);
					}
				})}
			</div>
		</form>
	);
}

import './Contact.style.css'
import Form from '../Form/Form.component'

const Contact = () => {
    const formConfig = [
		{ label: 'Name', type: 'text' },
		{ label: 'Email', type: 'email' },
		{ label: 'Phone Number', type: 'tel' },
		{ label: 'Submit', type: 'button', className: 'review-form-button' }
	  ];
	  
    return (
        <>
            <h1>Contact</h1>
            <Form config={formConfig}/>
        </>
    )
}

export default Contact

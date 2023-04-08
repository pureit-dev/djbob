import './Button.style.css'

const Button = (props) => {
    const { btnText } = props
    return (
        <button className='Button'>{btnText}</button>
    )
}

export default Button

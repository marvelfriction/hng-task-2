import React, { useState} from 'react'
import FormInput from './FormInput';
import './form.css'


const inputs = [
  {
    label: "First name",
    name: "firstName",
    type: "text",
    placeholder: "Enter your first name",
    id: "first_name",
    hint: false,
    className: 'fn'
  },
  {
    label: "Last name",
    name: "lastName",
    type: "text",
    placeholder: "Enter your last name",
    id: "last_name",
    hint: false,
    className: 'ln'
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "yourname@email.com",
    id: "email",
    hint: true
  },
]

const Form = () => {

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [textarea, setTextarea] = useState({
    message: "",
  });

  const [focused, setFocused] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleFocus = (e) => {
    setFocused(true);
  }
  // Track changes in input fields
  const onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues(values => ({...values, [name]: value}))
  };
  
  
  // Track changes in textarea
  const onTextareaChange = (e) => {
    setTextarea({...textarea, [e.target.name]: e.target.value});
  }

  // Error Message in Textarea
  const errorMessage = 'Please enter a message';

  return (
    <>
        <form>
            {inputs.map((input, i) => { 
            return(
                <div className={input.className} key={i}>
                <FormInput 
                    {...input}
                    value={values[input.name]}
                    onChange={onInputChange}
                    id={input.id}
                    hint={input.hint}
                />
                </div>
            )          
            })}

            <div className='message_box'>
                <label className='label' htmlFor='message'>Message</label>
                <textarea 
                    name="message" 
                    id="message" 
                    cols="30" 
                    rows="10" 
                    placeholder="Send me a message and I'll reply as soon as possible" 
                    onChange={onTextareaChange}  
                    required
                    onBlur={handleFocus} focused={focused.toString()}>
                </textarea>
                <p className='error_msg'>{errorMessage}</p>
            </div>

            <div className="check">
                <input 
                    type="checkbox" 
                    name="checkbox" 
                    id="check_box" 
                    required/>
                <label htmlFor='check_box'>You agree to providing your data to Marvelous Ezechi who may contact you.</label>
            </div>

            <button onSubmit={handleSubmit} id='btn__submit' type='submit'>Send message</button>
        </form>
    </>
  )
}

export default Form
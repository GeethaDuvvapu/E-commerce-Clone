import React from 'react'
import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";



const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, proceed with form submission (e.g., API call)
      alert('Form submitted successfully!');
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) {
      errors.firstName = 'First name is required';
    }
    if (!formData.lastName) {
      errors.lastName = 'Last name is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.subject) {
      errors.subject = 'Subject is required';
    }
    if (!formData.message) {
      errors.message = 'Message is required';
    }
    return errors;
  };


  return (
    <>
    {/* <div className="heading">
      <h1>Contact Us</h1>
      <p>Say Hello send us your thoughts about our products or share <br />
         your ideas with our Team!
      </p>

        <div className='input-form'>
          <div className='name'>
            <input type="text" placeholder='First name' />
            <input type="text" placeholder='Last name' />
          </div>
          <div className='name'>
            <input type="email" placeholder='Email*' />
            <input type="text" placeholder='Subject' />
          </div>
          <input type="text"  placeholder='Message' className='message'/>
        </div>
        <button>Send</button>
    </div> */}


     <div className="heading">
       <div className='greetings'>
         <h1>Contact Us</h1>
         <p>
          Say Hello send us your thoughts about our products or share
          your ideas with our Team!
         </p>
       </div>
        
        <form className='input-form' onSubmit={handleSubmit}>
          <div className='name'>
           <div>
             <input
              type="text"
              name="firstName"
              placeholder='First name'
              value={formData.firstName}
              onChange={handleChange}
             />
             {errors.firstName && <p className='error'>{errors.firstName}</p>}
           </div>
           <div>
            <input
              type="text"
              name="lastName"
              placeholder='Last name'
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p className='error'>{errors.lastName}</p>}
           </div>
          </div>
          <div className='name'>
            <div>
              <input
               type="email"
               name="email"
               placeholder='Email*'
               value={formData.email}
               onChange={handleChange}
             />
              {errors.email && <p className='error'>{errors.email}</p>}
            </div>
            <div>
              <input
               type="text"
               name="subject"
               placeholder='Subject'
               value={formData.subject}
               onChange={handleChange}
             />
              {errors.subject && <p className='error'>{errors.subject}</p>}
            </div>
        </div>
        <div>
           <input
             type="text"
             name="message"
             placeholder='Message'
             className='message'
             value={formData.message}
             onChange={handleChange}
          />
            {errors.message && <p className='error'>{errors.message}</p>}
        </div>
        <button type="submit">Send</button>
      </form>
     </div>

   

      
    </>
    
  )
}

export default Form
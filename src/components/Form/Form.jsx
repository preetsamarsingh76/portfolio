import React from 'react'
import './Form.css'
const Form = () => {
   const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7e740fa4-643e-422e-a65d-3328a81b5407");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div id='connect'>
      <div className='tp' >
        <h1>Contact Me</h1>
      </div>
       <div className='bop'>
      <form className='form' onSubmit={onSubmit}>
       
      <label htmlFor=''>  Name</label>
      <input type='text' placeholder='Enter Your Name' name='name'/>
      <label htmlFor=''> Email</label>
      <input type='email'placeholder='Enter Your Email' name='email'/>
      <label htmlFor=''>Write Your Message Here</label>
      <textarea name='message' rows="8" placeholder='Enter Your Message Here'></textarea>
      <button  type='submit' className='submit'>Send Message</button>
      </form>
    </div>
    </div>
  )
}

export default Form

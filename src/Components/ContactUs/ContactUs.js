
import React, { useState, useRef, useEffect } from 'react';
import './ContactUs.css';
import emailjs from '@emailjs/browser';

const ContactUs = ()=>{

    // useEffect(()=>{
    //     return document.title = "Contact US || fCleaning"
    // }, []);

    const formRef = useRef();

    const [name, setName] = useState('');
    const nameHandler = e=> setName(e.target.value);

    const [email, setEmail] = useState('');
    const emailHandler = ___=> setEmail(___.target.value);

    const [msg, setMsg] = useState('');
    const msgHandler = ___qwert___=> setMsg(___qwert___.target.value);

    const emailSender = e=>{
        e.preventDefault();
        console.log(name,email,msg);

        const serviceId = 'service_dpq5wtc';
        const templateId = 'template_3gheyed';
        const publicKey = 'Axmj0gm4WI6DkR8lu';


        emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      setTimeout(()=>{
        setName('');
        setEmail('');
        setMsg('');
      }, 1400)

    }


    return(<>

    <div className="ContactUs">

        <p className='bgtr'>Contact Us</p>

        <div className='form_wrapper'>
            <form className='tell_us_the_issue' onSubmit={emailSender} ref={formRef}>

                <div className='name_container'>
                    
                    <span className='popoz'>
                        Name <br />
                    </span>

                    <input 
                    type='text' 
                    placeholder="Enter your name" 
                    required={true}
                    className="users_name" 
                    value={name}
                    onChange={nameHandler}
                    name="user_name"
                    />
                </div>

                <div className='name_container'>
                    
                    <span className='popoz'>
                        Email <br />
                    </span>
                    
                    <input 
                    type='email' 
                    placeholder="Enter your email" 
                    required={true}
                    className="users_mail users_name" 
                    value={email}
                    onChange={emailHandler}
                    name="user_email"
                    />
                </div>


                <div className='name_container'>
                    <span className='popoz'>
                        Message <br />
                    </span>

                    <textarea className='text_area' 
                    placeholder='Message here...'
                    value={msg}
                    onChange={msgHandler}
                    name="user_message"
                    >
                    </textarea>
                </div>


                <div className='name_container'>
                    <input type="submit" value="Submit" className="submit_form" />
                </div>

            </form>
        </div>

    </div>

    </>)
}

export default ContactUs;
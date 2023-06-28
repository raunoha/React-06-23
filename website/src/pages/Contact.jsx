import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactUs2() {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();

  const sendEmail = () => {
    const data = {
      "from_name": nameRef.current.value,
      "from_email": emailRef.current.value,
      "from_phone": phoneRef.current.value,
      "message": messageRef.current.value
    }

    emailjs.send('service_fum24bj', 'template_ld2lsyd', data, 'Xbn0xj_4LjNugxYGl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
        <div>
            Siia tuleb asu koht ja kaart
            ja lahti oleku aeg 
        </div>
      <label>Name</label> <br />
      <input ref={nameRef} type="text" />  <br />
      <label>Email</label> <br />
      <input ref={emailRef} type="email" /> <br />
      <label>Phone</label> <br />
      <input ref={phoneRef} type="text" /> <br />
      <label>Message</label> <br />
      <textarea ref={messageRef} /> <br />
      <button onClick={sendEmail}>Send</button> <br />
       <br />
        <br />
         <br />
          <br />
           <br />
            <br />
             <br />
              
              
    </div>
  )
}

export default ContactUs2
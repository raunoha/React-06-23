import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Map from '../components/Map';

function ContactUs2() {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();
  const [coordinaates, setCoordinates] = useState({lngLat: [59.4378, 24.7574], zoom: 13});

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
          
        <button onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>Kõik poed</button>
        <button onClick={() => setCoordinates({lngLat: [59.4231, 24.7991], zoom: 13})}>Ülemiste</button>
        <button onClick={() => setCoordinates({lngLat: [59.478, 24.940], zoom: 13})}>Muuga</button>
    <Map mapCoordinaates={coordinaates}  /><br />
            Siit leiab meie lahti oleku aja , mis ajani oleme avatud ja küsimusi küsida. <br />
            Ülemist Kohvik on avatud 09-2100,
            <br />
            Muuga on avatud 0900-1600
        </div> <br />
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

export default ContactUs2;





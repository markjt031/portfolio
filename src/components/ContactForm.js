import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2"

export const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData]= useState({})
  const SERVICE_ID=process.env.REACT_APP_SERVICE_ID
  const TEMPLATE_ID=process.env.REACT_APP_TEMPLATE_ID
  const PUBLIC_KEY=process.env.REACT_APP_PUBLIC_KEY
  
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current)
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          Swal.fire({icon: "success", title: "Message Sent!", confirmButtonColor:"#14532d"})
      }, (error) => {
          console.log(error.text);
          Swal.fire({icon: "error", title: "Oops, something went wrong", text: error.text, confirmButtonColor:"#14532d"})
      });
  };

  return (
    <div className="bg-stone-200 w-full flex flex-wrap justify-center items-center h-[calc(100vh-200px)]">
        <h1 className="w-full text-center text-2xl text-slate-800">Contact Me!</h1>
        <form className="mx-auto my-auto w-[60%]" ref={form} onSubmit={sendEmail}>
            <input type="text" name="from_name" placeholder="Your Name" className="border border-slate-400 w-full rounded-md my-4 p-1 pl-3 "/>
            <input type="email" name="reply_to" placeholder="Your Email" className="border border-slate-400 w-full rounded-md my-4 p-1 pl-3" />
            <textarea name="message" placeholder="Your Message" className="border border-slate-400 w-full rounded-md my-4 h-[200px] p-1 pl-3" />
            <input type="submit" value="Send" className="hover:text-slate-900 hover:bg-white/30 border rounded-xl border-stone-400 p-2 cursor-pointer mx-auto w-20"/>
        </form>
    </div>
  );
};
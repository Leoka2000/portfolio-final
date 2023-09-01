import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import '../contact.css'
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';


const Index = () => {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (data) => {
    emailjs.send('service_cccr2pm', 'template_besecgl', data, 'gO1uoQT1AmEmllMjb')
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
}

const onSubmit = (data) => {
  sendEmail(data);
  console.log(data)
  Swal.fire({
      icon: 'success',
      title: 'Sua mensagem foi enviada com sucesso :)',
      text: 'Esteja atento à mim em sua caixa de email.'
  }).then(() => {
  });
}


  const submitData = (data) => {
   
    setSuccess(true);
    
  }



  return (
    <form className='form' onSubmit={handleSubmit(submitData)}>
      <input {...register("name", { required: true, minLength: 3 })} type='text' className='input' placeholder='Name'></input>
      {errors.name && <p className='error'>Check your name</p>}
      <input {...register("email", {
        required: true, pattern:
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      })}
        type='email' className='input' placeholder='Email'></input>
        {errors.email && <p className='error'>Check your email</p>}
      <textarea className='textarea' {...register("message", { required: true, maxLength: 1000 })} placeholder="What's on your mind"></textarea>
      <button className='contact-btn' type='submit'>Submit</button>
    </form>
  )
}

export default Index

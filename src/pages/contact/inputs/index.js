import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import '../contact.css'
import { db } from '../../../firebaseConfig';
import { addDoc, collection, getDocs } from 'firebase/firestore'


const Index = () => {
  const [success, setSuccess] = useState(false);
  const [users, setUsers] = useState([])
  const usersCollectionRef = collection(db, "users")
  const { // here we are destructuring the useForm object in our app
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
   
    // here we are making an asyncronous API call to get the firestore information
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
     
    }
    getUsers()
  }, [])


  const submitData = (data) => {
    addDoc(usersCollectionRef, {userData: data})
    setSuccess(true);
    
  }



  return (
    <form className='form' onSubmit={handleSubmit(submitData)}>
     {success ? (<p className='success'>Thanks for contacting!</p>) : ('')}
      <input {...register("name", { required: true, minLength: 3 })} type='text' className='input' placeholder='Name'></input>
      {errors.name && <p className='error'>Check your name</p>}
      <input {...register("email", {
        required: true, pattern:
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      })}
        type='email' className='input' placeholder='Email'></input>
        {errors.email && <p className='error'>Check your name</p>}
      <textarea className='textarea' {...register("message", { required: true, maxLength: 1000 })} placeholder="What's on your mind"></textarea>
      <button className='contact-btn' type='submit'>Submit</button>
    </form>
  )
}

export default Index

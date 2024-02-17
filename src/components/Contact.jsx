import React from 'react'
import { useState,useRef } from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'
import {styles} from '../styles'
import { slideIn } from '../utils/motion'
import { social } from '../constants/constants'

//template_05lphxe
//service_u0i5fvi
//LuuvpcjEw2SWc7kYI

const Contact = () => {

  const [form,setForm] = useState({
    name: '',
    email:'',
    message:''
  });

  const formRef = useRef();

  const [loading,setLoading] = useState(false);

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setForm({...form,[name]:value})

  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    emailjs.send(
      import.meta.env.VITE_SERVICE,
      import.meta.env.VITE_TEMPLATE,
      {
      from_name: form.name,
      to_name: 'Chirag',
      form_email: form.email,
      to_email: 'chiragjee40@gmail.com',
      message: form.message 
    },
    import.meta.env.VITE_SECRET).then(()=>{
      alert("Thank You! Will get back to you")
      setForm({
        name:"",
        email:"",
        message:""
      })
    })
  }

  return (
    <>
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden '>
      <motion.div
      variants={slideIn("left","tween",0.2,1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl' 
      >
        <div className='flex flex-column justify-between'>
        <p className={`${styles.sectionHeadText}`}>Get In Touch</p>
        <div className='flex flex-column gap-3 mt-6'>
          {social.map((id)=>(
           
              <img src={id.image} alt={id.name} className='w-9 h-9 cursor-pointer hover:size-10' onClick={()=>window.open(id.profileLink,"_blank")}/>
           
          ))}
        </div>
        </div>
       
        <h3 className={`${styles.sectionSubText}`}>Contact</h3>

        <form ref={formRef} onSubmit={handleSubmit}
        className='mt-12 gap-8 flex flex-col'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name:</span>
            <input type='text' name='name' value={form.name} onChange={handleChange} placeholder='Your Name Please!' className='bg-tertiary py-4 px-6 text-white rounded-lg outline-line border-none'/>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email:</span>
            <input type='email' name='email' value={form.email} onChange={handleChange} placeholder='Your Email Please!' className='bg-tertiary py-4 px-6 text-white rounded-lg outline-line border-none'/>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message:</span>
            <input type='text' name='message' value={form.message} onChange={handleChange} placeholder='Your Message Please!' className='bg-tertiary py-10 px-6 text-white rounded-lg outline-line border-none'/>
          </label>
          <button type='submit' onClick={handleSubmit} className='bg-tertiary w-fit font-bold '>Send!!</button>
        </form>
      </motion.div>
    </div>
    </>
  )
}

export default Contact
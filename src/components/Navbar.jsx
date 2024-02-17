import React, { useState } from 'react'
import {styles} from '../styles'
import {navLinks} from '../constants/constants'
import { logo,menu,close } from '../assets'
import { Link } from 'react-router-dom'


const Navbar = () => {

  const [active,setActive] = useState("");
  const [toggle,setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2' onClick={()=>{
          setActive("")
          window.scrollTo(0,0);
          }}>
            <img src={logo} alt="logo" className='w-9 h-9 object-contain'/>
            <p className='text-[18px] text-white cursor-pointer font-bold flex'>Chirag &nbsp;<span className='sm:block hidden'>| Web Developer</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((item)=>(
            <li key={item.id} className={`${active===item.id ? 'text-white' : 'text-secondary'} hover:text-gray-50 cursor-pointer text-[18px]`} onClick={()=>setActive(item.id)}>
              <a href='#'>{item.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt='menu' className='w-9 h-9 cursor-pointer' onClick={()=>setToggle(!toggle)}/>
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 absolute top-20 black-gradient right-0 mx-4 my-2 z-10 min-w[140px] rounded-xl`}>
          <ul className='list-none flex flex-col justify-end items-start gap-4'>
          {navLinks.map((item)=>(
            <li key={item.id} className={`${active===item.id ? 'text-white' : 'text-secondary'} hover:text-gray-50 cursor-pointer text-[18px]`} onClick={()=>{
              setActive(item.id);
              setToggle(!toggle);
              }}>
              <a href='#'>{item.title}</a>
            </li>
          ))}
        </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'

import {styles} from '../styles'
import {services} from '../constants/constants'
import {fadeIn, textVariant} from '../utils/motion'

const ServiceCard = ({index,title,icon})=>{
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div 
      variants={fadeIn("right","spring",0.5*index,0.75)}
      className='w-full green-pink-gradient p-1 rounded-[20px]'
      >
        <div
        options={{
          max:45,
          scale:1,
          speed:450
        }} 
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-center font-bold'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <div className='ml-10'>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        Introduction
      </p>
      <h1 className={styles.sectionHeadText}>
        OverView
      </h1>
    </motion.div>
   <motion.p
   variants={fadeIn("","",0.1,1)}
   className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
   >
    This is the <span className='text-cyan-500'>Tech Stack</span> I have learnt and for <span className='text-cyan-500'>Programming</span> i have solved over <span className='text-rose-500'>600+ problems</span> on these Platforms. I have made various projects using these technologies.
   </motion.p>

   <div className='mt-20 flex flex-wrap gap-10'>
    {services.map((serv,index)=>(
      <ServiceCard key={serv.title} index={index}{...serv}/>
    ))}
   </div>
    </div>
  )
}

export default About
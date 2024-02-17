import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas/'
import { social } from '../constants/constants';


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 inset-0`}>
        <div className='felx flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient mx-2' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915eff]'>Chirag</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>

            Welcome to My Portfolio Website!
            <br />
            I am an <span className='text-[#915eff]'>Electronics and Communication UnderGrad</span> with great interests in <span className='text-[#915eff]'>Computer Science and Enginering</span>.
          </p>
        </div>
      </div>
     <br/>
      {/* <ComputersCanvas/> */}
  
     

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'></a>

      </div>
    </section>
  )
}

export default Hero
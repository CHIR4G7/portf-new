import React from 'react'
import {BallCanvas} from './canvas/Ball'
import { technologies } from '../constants/constants'
import { styles } from '../styles'


const Tech = () => {
  return (
    <div className='mt-[130px] ml-5'>
      <h1 className={`${styles.sectionHeadText} text-center`}>Technologies I have Hands On</h1>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((tech)=>(
        <div className='w-28 h-28' key={tech.name}>
          <BallCanvas icon={tech.icon}/>
          <span className='text-center'>{tech.name}</span>
          </div>
      ))}
    </div>
  
    </div>
  )
}

export default Tech
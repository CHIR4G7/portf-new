import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from'../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { git, github } from '../assets'
import { projects } from '../constants/constants'

const ProjectCard = ({index,name,description, tags,image,source_code_link})=>{
  return (
   <motion.div
   variants={fadeIn("up","spring",0.5*index,0.75)}
   >
    <Tilt 
    options={{
      max: 45,
      scale:1,
      speed: 450
    }}
    className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full xs:w-[250px]'
    >
      <div className='relative w-full h-[230px]'>
        <img src={image} className='w-full h-full object-cover rounded-xl'/>
      </div>
      <div className='absolute inset-0 justify-end m-3 card-img_hover'>
        <div onClick={()=>window.open(source_code_link,"blank")}>
          <img src={github} className='w-9 h-9 black-gradient cursor-pointer rounded-full'/>
        </div>
      </div>
      <div className='mt-5'>
        <h3 className='font-bold'>{name}</h3>
        <p>{description}</p>
        <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag)=>(
          <p key={tag.name} className={`text-14 ${tag.color}`}>
            {tag.name}
          </p>
        ))}
        </div>
       
      </div>
    </Tilt>
   </motion.div>
  )

}

const Works = () => {
  return (
    <div className='mt-[130px] ml-20'>
       <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        My Work
      </p>
      <h1 className={styles.sectionHeadText}>
        Projects
      </h1>
    </motion.div>
    <div className='w-full flex'>
      <motion.p
      variants={fadeIn("","",0.5,0.5)}
      className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Some Projects showcasing my Skills and the perseverance and dedication one needs to create them.
      </motion.p>
    </div>
    <div className='flex flex-wrap mt-20 gap-7'>
      {projects.map((project,index)=>(
        <ProjectCard key={index} {...project}/>
      ))}
    </div>
    </div>
  )
}

export default Works
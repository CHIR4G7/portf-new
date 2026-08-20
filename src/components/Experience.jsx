import {motion} from 'framer-motion'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';

import {styles} from '../styles';
import { experiences } from '../constants/constants';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({experience})=>{
  return (
    <>
    <div className='w-full'>
      <h3 className='font-bold text-center'>{experience.title}</h3>
      <p>Organization: <span>{experience.company_name}</span> </p>
      <p className='mt-4 mb-4'>Duration: <span>{experience.date}</span></p>
      <ul className='mt-2 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
            {point}
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

const Experience = () => {
  return (
    <div className='mt-[130px] ml-20' >
    <motion.div
    variants={textVariant()}
    >
       <p className={styles.sectionSubText}>
        What i've Done So Far
      </p>
      <h1 className={styles.sectionHeadText}>
        Work Experience
      </h1>
    </motion.div>

    <div className='mt-20 flex flex-col'>
      <VerticalTimeline>
        
        {experiences.map((exp,index)=>(
          <VerticalTimelineElement
          key={index}
          contentStyle={{
            background: "#1d1836"
          }}
          icon={
            <div>
              <img src={exp.icon} alt={exp.company_name} className='rounded-full'/>
            </div>
          }
          >
          <ExperienceCard experience={exp}/>
          </VerticalTimelineElement>
        ))}
        
      </VerticalTimeline>
    </div>
    </div>
  )
}

export default Experience
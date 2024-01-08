import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import { AppWrapper } from '../../wrapper'
import { urlFor, client } from '../../client'
import './Skills.scss'

const Skills = ()=>{
    const [skills, setSkills] = useState([])

    useEffect(()=>{
        const query = '*[_type == "skills"]'
        client.fetch(query)
        .then((data)=> {
            setSkills(data)
        })
    }, [])
   
    return (
       <div className='aboutWork skill'>
        <h2 className='head-text'>My Skill <span>set</span></h2>
        <div className='skill-container'>
            {
                skills.map((skill)=> (
                    <div className='skill-info'>
                      <motion.div
                      className='skill-info-div'
                      whileInView={{opacity:[0, 1]}}
                      whileHover={{scale: [1, 1.1]}}
                      transition={{duration: 0.5, ease: 'easeInOut'}}
                      >
                        <img src={urlFor(skill.icon)}/>
                      </motion.div>
                      <p className='p-text'>{skill.name}</p>
                        </div>
                ))
            }
        </div>
       </div>
    )
}
export default AppWrapper(Skills, 'skills', 'aboutWork')
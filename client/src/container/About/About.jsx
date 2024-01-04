import './About.scss'
import { useState, useEffect } from 'react'
import {images} from '../../constants'
import {motion} from "framer-motion"
const About = ()=>{
    const abouts = [
        {title: 'web Development', description: 'I am a good web Developer', imageurl: images.about01},
        {title: 'FrontEnd Development', description: 'I am a frontEnd Developer', imageurl: images.about02},
        {title: 'Backend Development', description: 'I am a good backend Developer', imageurl: images.about03}
    ]
    return (
    <div style={{marginTop: '30px'}}>
         <h2 className='head-text'>I Know <span>Good Development</span> <br/> Means <span> Good Application</span>
    </h2>
    <div className='app__profile'>
        {
            abouts.map((about, index)=> (
                <motion.div
                whileHover={{scale: 1.1}}
                transition={{duration: 0.6, type: 'tween'}}
                key={index}
                className='app__profile-item'
                >
                    <img src={about.imageurl} alt='description'/>
                    <h2 className='bold-text' style={{marginTop: 20}}>
                        {about.title}
                    </h2>
                    <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
                </motion.div>
            ))
        }
    </div>
    </div>
    )
}
export default About
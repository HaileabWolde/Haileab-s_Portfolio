import './About.scss'
import { useState, useEffect } from 'react'
import {motion} from "framer-motion"
import { urlFor, client } from '../../client'
import { AppWrapper } from '../../wrapper'
const About = ()=>{
    const [abouts, setAbouts] = useState([])

    useEffect(()=> {
        const query = '*[_type == "abouts"]';
        client.fetch(query)
        .then((data)=> {
            setAbouts(data)
        })
    }, [])
    return (
    <div style={{marginTop: '30px'}} className='aboutWork'>
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
                    <img src={urlFor(about.imgUrl)} alt='description'/>
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
export default AppWrapper(About, 'about', 'aboutWork')
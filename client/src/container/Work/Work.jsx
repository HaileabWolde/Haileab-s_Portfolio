import React, {useEffect, useState} from 'react'
import {AiFillEye} from 'react-icons/ai'
import { FaGithub } from "react-icons/fa6";
import { motion } from 'framer-motion'

import {AppWrapper} from '../../wrapper'
import {urlFor, client} from '../../client'
import './Work.scss'

const Work = ()=>{
    const [activeFilter, setActiveFilter] = useState('All')
    const [animateCard, setAnimateCard] = useState({
        scale: 1,
     
    })
    const [works, setWorks] = useState([])
    const [filterworks, setFilterworks] = useState([])

    const handleWorkfilter = (item)=> {
        setActiveFilter(item)
        setAnimateCard([{  scale: 0}])
        setTimeout(()=>{
            setAnimateCard([{ scale: 1}])
        }, 800)

        setFilterworks(works.filter((work)=> work.tags.includes(item)))
    }

    useEffect(()=>{
        const query = '*[_type == "works"]'
        client.fetch(query)
        .then((data)=> {
            setWorks(data)
            setFilterworks(data)
        })
    }, [])
   
    return (
        <div className='aboutWork'>
               <h2 className='head-text'>My Creative <span>Portfolio</span> Section </h2>
        <div className='app__work-filter'>
            {
                ['E-CommerceApp', 'RealEstateApp', 'MovieReview', 'All'].map((item)=> (
                    <div
                    key={item} 
                    className={`app__work-filter-item p-text app__flex ${activeFilter === item ? 'item-active' : ''}`}
                    onClick={()=>handleWorkfilter(item)}
                    >
                        {item}
                        </div>
                ))
            }
        </div>
        <motion.div
        animate={animateCard}
        transition={{duration: 0.5}}
        className='app__work-portfolio '
        >
            {
                filterworks.map((work, index)=> (
                    <div
                    key={index} 
                    className='app__work-item app__flex'>
                        <div className='app__work-img '>
                            <img src={urlFor(work.imgUrl)} alt={work.Title} style={{marginBottom: 10}}/>
                            <motion.div
                            whileHover={{opacity: [0, 1]}}
                            transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                            className='app__work-hover app__flex'
                            >
                                <a href={work.projectLink} target='_blank'>
                                    <motion.div
                                        whileInView={{scale: [0, 1]}}
                                        whileHover={{scale: [1, 0.9]}}

                                        className='app__flex'
                                    >
                                         <AiFillEye/>
                                    </motion.div>
                                   
                                </a>
                                <a href={work.codeLink} target='_blank'>
                                    <motion.div
                                        whileInView={{scale: [0, 1]}}
                                        whileHover={{scale: [1, 0.9]}}
                                        className='app__flex'
                                    >
                                      <FaGithub/>
                                    </motion.div>
                                   
                                </a>
                            </motion.div>
                            <div className='app__work-content app__flex'>
                            <h4 className='bold-text'>{work.title}</h4>
                            <p className='p-text' style={{marginTop: 10}}>{work.description}</p>
                            </div>
                           
                           
                        </div>
                    </div>
                ))
            }
        </motion.div>
        </div>
    )
}
export default AppWrapper(Work, 'works', 'aboutWork')
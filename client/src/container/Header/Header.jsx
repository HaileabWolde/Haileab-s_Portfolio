import './Header.scss'
import React, {useState} from 'react'
import {motion} from "framer-motion"
const Header = ()=>{
    return (
        <div className='app__header app__flex'>
          <motion.div
          whileInView={{x:[-100, 0], opacity: [0, 1]}}
          transition={{duration: 0.6}}
          className='app_header-info'
          >
            <div className='app__header-badge'>
                <div className='badge-cmp app__flex'>
                    <span>
                    👋
                    </span>
                    <div style={{marginLeft: '10px'}}>
                        <p className='p-text'>Hello I am </p>
                        <h1 className='head-text'>Haileab</h1>
                    </div>
                </div>
                <div className='tag-cmp app__flex'>
                    <p className='p-text' style={{marginRight: '10px'}}>Web Developer</p>
                    <p className='p-text'>Freelancer</p>
                </div>
            </div>
            </motion.div>  
        </div>
    )
}
export default Header
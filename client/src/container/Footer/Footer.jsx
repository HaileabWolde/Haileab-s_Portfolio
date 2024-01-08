import React from 'react'
import { images } from '../../constants'
import './Footer.scss'
import { AppWrapper, Motionwrapper } from '../../wrapper'
const Footer = ()=>{
    return (
        <div style={{backgroundColor: '#fff'}}>
            <h1 className='head-text'>Contact with <span> me <span></span></span></h1>
            <div className='Footer'>
                <div className='Footer-One'>
                   <img src={images.email} alt='email' style={{marginRight: '5px'}}/>
                   <a href="mailto:womahaileab1428@gmail.com" className='p-text'>womahaileab1428@gmail.com</a>
                </div>
                <div className='Footer-Two'>
                    <img src={images.mobile} alt='mobile' style={{marginRight: '5px'}}/>
                    <a href="tel:0992621400" className="p-text">0992621400</a>
                </div>
            </div>
        </div>
    )
}
export default AppWrapper(
    Motionwrapper(Footer, 'aboutWork'),
    'contact', 'aboutWork'
)
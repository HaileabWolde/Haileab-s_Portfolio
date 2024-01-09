import React, {useState} from 'react'
import { images } from '../../constants'
import './Footer.scss'
import { AppWrapper, Motionwrapper } from '../../wrapper'
import {client } from '../../client'
const Footer = ()=>{
    const [isloading, setLoading] = useState(false)
    const [fillForm, setForm] = useState(false)
    const [FormData, setFormData] = useState({
        Name: '',
        Email: '',
        Messages: ''
    })
    const handleChange = (e)=> {
        setFormData(
            {
                ...FormData,
                [e.target.name] : e.target.value
            }
        )
    }
  const handleSubmit = (e)=> {
    e.preventDefault();
    setLoading(true);
    const contact = {
        _type: 'contact',
        name: FormData.Name,
        email: FormData.Email,
        message: FormData.Messages
    }
    client.create(contact).
    then(()=> {
        setLoading(false)
        setForm(true)
    })
  }
    return (
        <div  className="MAIN" style={{backgroundColor: '#fff'}}>
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
            {
                fillForm ?  (
                    <h4 className='head-text '>Thank You For Your Message</h4>
                 )
                 : (
                    <form className='InputField' onSubmit={handleSubmit}>
               
                    <div>
                      <input
                      placeholder='Your Name'
                      type='text'
                      name='Name'
                      value={FormData.Name}
                      onChange={(e)=> handleChange(e)}
                      />
                    </div>
                    <div>
                    <input
                      placeholder='Your Email'
                      type='email'
                      name='Email'
                      value={FormData.Email}
                      onChange={(e)=> handleChange(e)}
                      /> 
                    </div>
                    <div>
                    <textarea
                      placeholder='Your Messages'
                      type='text'
                      name='Messages'
                      value={FormData.Messages}
                      onChange={(e)=> handleChange(e)}
                      /> 
                    </div>
                    <button type='submit'>
                       {
                        isloading ? 'Sending Message ...' : 'Send Message'
                       }
                    </button>
                </form>
                ) 
            }
           
           
        </div>
    )
}
export default AppWrapper(
    Motionwrapper(Footer, 'aboutWork'),
    'contact', 'app__container_1 '
)
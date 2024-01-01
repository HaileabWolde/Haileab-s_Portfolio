import React from 'react'
import './Navbar.scss'
import {images} from '../../constants'
const Navbar = ()=> {
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo}/>
      </div>
      <ul className='app__navbar-links'>
        {
          ['Home', 'About', 'Works', 'Skills', 'Contact'].map((item)=> (
            <li key={`link-${item}`} className=''>
              <div/>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Navbar
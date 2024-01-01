import React from 'react'
import {About, Footer, Header, Skills, Testimonals, Work} from './container'
import { Navbar } from './components';
const App = ()=> {
  return (
   <div className='app'>
    <Navbar/>
     <Header/>
    <About/>
    <Work/>
    <Skills/>
    <Testimonals/>
    <Footer/>
   </div>
  );
}

export default App;

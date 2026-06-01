import React from 'react'
import Hero from './features/Hero'
import Event from './features/Event'
import Speaker from './features/Speaker'
import Timeline from './features/Timeline'
import Gallery from './features/Gallery'
import Register from './features/Register'
import Faq from './features/Faq'
import Contact from './features/Contact'
import Copyright from './features/Copyright'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div id="hero"> <Hero/></div> 
   
      <Event/>
      <Speaker/>
  <div id="timeline"><Timeline/></div>
  <div id="gallery"> <Gallery/></div>
    <div id="register">  <Register/></div>
    
    <div id="faq">  <Faq/></div>
      <Contact/>
      <Copyright/>
    </div>
  )
}

export default App

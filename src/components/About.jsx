import React from 'react'
import "./About.css"
import Header from './Header'

import Contact from './Contact';

function About() {
  return (
    <div>
         <Header/>
      <h1 className='ah1'>This is About</h1>
      <Contact name="jalal" number="00023164564564"/>
      <Contact name="kamal" number="00023164564564"/>
      <Contact name="jelal" number="00023164564564"/>
      <Contact name="jibon" number="00023164564564"/>
    </div>
  )
}

export default About

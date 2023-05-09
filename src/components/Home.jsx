import React from 'react'
import "./Home.css"
import Header from './Header'
import Contact from './Contact'
import Problem from './Problem'

function Home() {
  return (
    <div>
        <Header/>
      <h1 className='h1h'>This is home page</h1>
      <Contact name="jalal" number="00023164564564"/>
      <Contact name="kamal" number="00023164564564"/>
      <Contact name="jelal" number="00023164564564"/>
      <Contact name="jibon" number="00023164564564"/>
      <hr />
      <Problem/>

    </div>
  )
}

export default Home

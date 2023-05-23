import React from 'react'
import "./Home.css"
import Header from './Header'
import Form from './Form'
import Problem from './Problem'


function Home() {
  return (
  <>
        <Header/>
      <h1 className='h1h'>This is home page</h1>
      <hr />
      <Problem/>
      <Form />
  

    </>
  )
}

export default Home

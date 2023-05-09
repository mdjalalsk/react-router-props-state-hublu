import React from 'react'
import "./Contact.css"
import Header from './Header'


function Contact(props) {
  return (
    <div>
         <Header/>
      <h1 className='h1c'>This is Contact</h1>
      <h1> My Name is {props.name} & My Number is {props.number} </h1>
     
      
      
    </div>
  )
}

export default Contact

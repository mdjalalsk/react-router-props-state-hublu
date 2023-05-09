import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import { BrowserRouter, Route,Routes } from 'react-router-dom'

function App() {

  return(
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Contact' element={<Contact/>}></Route>

   </Routes>
    </BrowserRouter>
   
  )
}

export default App

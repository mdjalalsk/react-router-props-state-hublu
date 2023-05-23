
import './App.css'
import Home from './components/home'
import About from './components/About'
import Contact from './components/Contact'

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

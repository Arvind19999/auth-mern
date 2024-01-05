import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import About from './pages/About';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Prac from './pages/Prac'



const App = () => {
  return (
<BrowserRouter>

<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/signin' element={<Signin />}/>
  <Route path='/signup' element={<Signup />}/>
  <Route path='/about' element={<About />}/>
  <Route path='/profile' element={<Profile />}/>
  <Route path='/contact' element={<Contact />}/>
  <Route path='/prac' element={<Prac />}/>
</Routes>
</BrowserRouter>
  )
}

export default App
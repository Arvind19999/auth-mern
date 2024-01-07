import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import About from './pages/About';
import Profile from './pages/Profile';
// import Contact from './pages/Contact';
import Header from './components/Header';
import PrivateRoutes from './components/PrivateRoutes';



const App = () => {
  return (
<Router>
<Header />
<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/login' element={<Signin />}/>
  <Route path='/signup' element={<Signup />}/>
  <Route path='/about' element={<About />}/>
  <Route element={<PrivateRoutes />}>
  <Route path='/profile' element={<Profile />}/>
  </Route>
  

  {/* <Route path='/contact' element={<Contact />}/> */}
</Routes>
</Router>
  )
}

export default App
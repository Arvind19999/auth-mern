import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <div className="p-4 bg-slate-200">
        <div className="flex justify-between max-w-6xl m-auto">
        <h1 className="font-bold">
        <Link to="/">Auth Header</Link>
        </h1>
        <ul className="flex gap-4">
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/profile"><li>Profile</li></Link>
            <Link to="/login"><li>SignIn</li></Link>

        </ul>
        </div>
        
    </div>
    </>
  )
}

export default Header
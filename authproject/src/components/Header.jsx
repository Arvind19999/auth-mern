import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Header = () => {
  const currentUser = useSelector((state)=>(state.user))
  console.log(currentUser.currentUser)
  // console.log(currentUser.currentUser.user.profilePicture)
  // console.log(currentUser)
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
            {/* <Link to="/login"><li>SignIn</li></Link> */}
            {/* <Link to="/login">
              {
              currentUser.currentUser === null?
                (<li>SignIn</li>)
              :( <img src={currentUser.currentUser.user.profilePicture} alt="profilePicture" className="object-cover rounded-full w-7 h-7" />)
              }
            </Link> */}
            
              {
              currentUser.currentUser === null?
                (<Link to="/login">  <li>SignIn</li></Link>)
              :(<Link to="/profile">  <img src={currentUser.currentUser.user.profilePicture} alt="profilePicture" className="object-cover rounded-full w-7 h-7" /></Link>)
              }

        </ul>
        </div>
        
    </div>
    </>
  )
}

export default Header
import React from 'react'
import { useSelector } from 'react-redux'
const Profile = () => {
  const currentUser = useSelector(state => state.user)
  // console.log(currentUser.currentUser.user.userName)
  const submitHandler =(e)=>{
      e.preventDefault();
      console.log("The button is pressed")
  }
  return (
    <>
<div className="max-w-lg p-4 m-auto text-center">
        <h1 className="text-3xl font-semibold uppercase m-7">User Profile</h1>
        <div className="form">
          <form action="#" onSubmit={submitHandler} className='flex flex-col'>
            <img src={currentUser.currentUser.user.profilePicture} alt="userProfile" className="self-center rounded-full cursor-pointer w-15 h-15" />
            <input type="text" 
                    name="userName" 
                    id="userName" 
                    placeholder="Enter User Name"
                    defaultValue = {currentUser.currentUser.user.userName}
                    // onChange={(e)=>setUserName(e.target.value)}
                    className="p-3 m-3 bg-slate-200 rounded-2xl"
                    />
            <input type="email" 
                    name="userEmail" 
                    id="email" 
                    placeholder="Enter User Email" 
                    defaultValue = {currentUser.currentUser.user.email}
                    // onChange={(e)=>setEmail(e.target.value)}
                    className="p-3 m-3 bg-slate-200 rounded-2xl"
                    />
            <input type="password" 
                    name="password"  
                    id="userPassword" 
                    placeholder="Enter User Password"
                    // value = {password}
                    // onChange={(e)=>setPassword(e.target.value)}
                    className="p-3 m-3 bg-slate-200 rounded-2xl"
                    />

            <button type="submit"  
              // disabled= {isLoading}
                    className="p-3 mt-10 text-lg text-white uppercase bg-slate-700 rounded-2xl hover:opacity-90 disabled:opacity-70">
                      {/* {isLoading?"Loading..." : "Sign Up"}      */} update
            </button>
          
          </form>
          <div className="flex justify-between mt-1">
            <span className="text-red-600">Delete An Account</span>
            <span className="text-red-600">Sign Out</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
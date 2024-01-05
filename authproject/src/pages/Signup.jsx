import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
    <div>
      <div className="max-w-lg p-4 m-auto text-center">
        <h1 className="text-3xl font-semibold uppercase m-7">Sign Up</h1>
        <div className="form">
          <form action="#" className='flex flex-col'>
            <input type="text" 
                    name="userName" 
                    id="userName" 
                    placeholder="Enter User Name"
                    className="p-3 m-3 bg-slate-200 rounded-2xl"
                    />
            <input type="email" 
                    name="userEmail" 
                    id="userEmail" 
                    placeholder="Enter User"
                    className="p-3 m-3 bg-slate-200 rounded-2xl"
                    />
            <input type="password" 
                    name="userPassword"  
                    id="userPassword" 
                    placeholder="Enter User Password"
                    className="p-3 m-3 bg-slate-200 rounded-2xl"
                    />

            <button type="submit"  
                    className="p-3 mt-10 text-lg text-white uppercase bg-slate-700 rounded-2xl hover:opacity-90 disabled:opacity-70">
                      Sign Up
            </button>

            <div className="flex mt-2">
              <p>Already Have An Account?</p>
              <Link to="/login"> <span className="text-blue-500"> Log in</span> </Link>
              
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup
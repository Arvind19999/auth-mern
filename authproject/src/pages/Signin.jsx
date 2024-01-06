import   { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
axios.defaults.withCredentials = true;

import { signInStart,signInSuccess,signInFailure } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [isLoading, setIsLoading] = useState(false)
    const {isLoading} = useSelector((state)=>state.user)
    const navigate = useNavigate();
    const dispatch = useDispatch();

console.log(isLoading)
// console.log(errors.response)
const submitHandler=async (e)=>{
    e.preventDefault();
try {
    // setIsLoading(true)
    dispatch(signInStart()) 
  const userLogin = await axios.post("http://localhost:3000/api/auth/user/login",{
    email  :email,
    password : password
  },{
    withCredentials: true,
  })

  console.log(userLogin.data);
  // setIsLoading(false)
  dispatch(signInSuccess(userLogin))
      // Show a success toast
      toast.success('User Logged in Successfully', {
        position: toast.POSITION.TOP_RIGHT,
      });

      navigate('/')
      
} catch (error) {
  dispatch(signInFailure(error.response.data["errorMessage"]))
  console.log(error.response.data["errorMessage"])
  toast.error(error.response.data["errorMessage"], {
    position: toast.POSITION.TOP_RIGHT,
  });
}
 
}
  return (
    <>
    <div>
      <div className="max-w-lg p-4 m-auto text-center">
        <h1 className="text-3xl font-semibold uppercase m-7">Log In</h1>
        <div className="form">
          <form action="#" onSubmit={submitHandler} className='flex flex-col'>
            <input type="email" 
                    name="userEmail" 
                    id="email" 
                    placeholder="Enter User Email"
                    value = {email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className="p-3 m-3 bg-slate-200 rounded-2xl"
                    />
            <input type="password" 
                    name="password"  
                    id="userPassword" 
                    placeholder="Enter User Password"
                    value = {password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className="p-3 m-3 bg-slate-200 rounded-2xl"
                    />

            <button type="submit"  
              disabled= {isLoading}
                    className="p-3 mt-10 text-lg text-white uppercase bg-slate-700 rounded-2xl hover:opacity-90 disabled:opacity-70">
                      {isLoading?"Loading..." : "Log In"}   
            </button>
            <OAuth />
            <ToastContainer />
            <div className="flex mt-2">
              <p> Don't Have An Account?</p>
              <Link to="/signup"> <span className="text-blue-500"> Sign Up</span> </Link>
              
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signin
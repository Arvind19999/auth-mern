import React from 'react'
import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth"
import axios from 'axios';
import { useDispatch } from 'react-redux';

import {app} from "../firebase.js"
import { signInSuccess } from '../redux/user/userSlice.js';


const OAuth = () => {
    const dispatch = useDispatch();
    const googleLogHandler = async ()=>{
        try {
            console.log("The button is pressed")
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app);
            const result = await signInWithPopup(auth,provider)
            const googleUser  = await axios.post("http://localhost:3000/api/auth/google/login",{
                email : result.user.email,
                userName : result.user.displayName,
                profilePicture : result.user.photoURL
            },{
                withCredentials: true,
              });
            console.log(googleUser)
              dispatch(signInSuccess(googleUser.data))
        } catch (error) {
            dispatch()
          console.log("Could Not Login With Google",error.response.data["errorMessage"])  
          
        }
    }
  return (
<>
<button 
        onClick={googleLogHandler}
        type="button" 
        className="p-3 mt-1 text-lg text-white uppercase bg-red-700 rounded-2xl hover:opacity-90 disabled:opacity-70">
            Continue With Google
        </button>
</>  
)
}

export default OAuth
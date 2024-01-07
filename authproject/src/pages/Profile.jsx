import React,{ useRef, useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from "firebase/storage"

import {app} from "../firebase"


const Profile = () => {
  const [image,setImage] = useState(undefined)
  const[imgPercTrack,setImgPercTrack] = useState(0)
  const [imgError, setImgError] = useState(false);
  const [profilePictureUrl, setProfilePictureUrl] = useState();
  const currentUser = useSelector(state => state.user)
  // console.log(profilePictureUrl)
  // console.log(currentUser.currentUser.user.userName)
  const userImageRef = useRef(null)
// console.log(image)
// console.log(imgError)
// console.log(imgPercTrack)
useEffect(() => {
if(image){
  // console.log(image.name)
    handleUploadImage(image)
}
}, [image]);

const handleUploadImage= async (image)=>{
// console.log(image)
const storage = getStorage(app);
const fileName = new Date().getTime() + image.name;
const storageRef = ref(storage,fileName);
const uploadTask = uploadBytesResumable(storageRef,image);
uploadTask.on(
  "state_changed",
  (snapshot)=>{
    const progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
    // console.log("Upload task is " +progress+"% done")
    setImgPercTrack(Math.round(progress))
  },
  (error)=>{
    setImgError(true)
  },
  ()=>{
    getDownloadURL(uploadTask.snapshot.ref)
    .then((downloadURL)=>{
      setProfilePictureUrl(downloadURL)
    })
  })
}
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
            <input type="file" ref={userImageRef} hidden  accept="image/*" onChange={(e)=>setImage(e.target.files[0])}/>
            <img src={currentUser.currentUser.user.profilePicture}
                 alt="userProfile" className="self-center rounded-full cursor-pointer w-15 h-15" 
                 onClick={()=>userImageRef.current.click()}
                 />
                 <p>
                  {imgError? (<span className="text-red-700"></span>)
                  : imgPercTrack > 0 && imgPercTrack < 100 ? (<span className="text-slate-500">{ `Uploading ${imgPercTrack}% Completed `}</span>)
                  : imgPercTrack == 100?(<span className="text-green-600">Image Uploaded Successfully</span>)
                  : ""
                  }
                 </p>
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
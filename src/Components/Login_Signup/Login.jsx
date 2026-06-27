import React, { useState } from 'react'
import { auth } from '../../Firebase'
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import "./Login.css"

function Login() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
    const sighnUphandle=async()=>{
         if(!email || !password){
          alert("please fill field")
          return}
      try{
        const user= await createUserWithEmailAndPassword(auth,email,password)
        alert("signUp successfully")
        navigate("/")


      }catch(error){
        console.log(error.message);
        
      }
      }
      const LoginHandle=async()=>{
          if(!email || !password){
          alert("please fill field")
          return}
        try{
          const user= await signInWithEmailAndPassword(auth,email,password)
         
          alert("Login Successfully")
            navigate("/")
          

        }catch(error){
          console.log(error.message);
          
        }
      }

    
  return (
    <div className='login-container'>
      <div className='login-box'>
        <h1>login page</h1>
        <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='email' />
        <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder='password' />
        <button onClick={sighnUphandle}>Signup</button>
        <button onClick={LoginHandle}>Login</button>
      </div>
      
    </div>
  )
}

export default Login


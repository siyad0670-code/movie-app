import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../Firebase'
import { useNavigate } from 'react-router-dom'
import "./Logot.css"

function Logot() {
 const navigate=useNavigate()
  const logoutHandle= async()=>{
     
  await signOut(auth)
  alert("Logout Successfully")
  navigate("/login")
  

  }
  return (
    <div className='logout-container'>
      <div className='logout-box'>
      <h1>Logut Page</h1>
      <button onClick={logoutHandle}>Logout</button>
      </div>
      
    </div>
  )
}

export default Logot

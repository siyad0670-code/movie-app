import React from 'react'
import Login from "./Components/Login_Signup/Login"
import Home from "./Components/Home/Home"
import Favorites from "./Components/Favorites/Favorites"
import MovieDetails from "./Components/MovieDetails"
import Logout from "./Components/Logout/Logot"
import {BrowserRouter,Route,Routes} from "react-router-dom"



function App() {
  return (
    <div>
      
    
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/movie_Details' element={<MovieDetails/>}/>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  )
}

export default App


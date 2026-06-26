import React from 'react'
import Login from "./Components/Login"
import Home from "./Components/Home"
import Favorites from "./Components/Favorites"
import MovieDetails from "./Components/MovieDetails"
import Logout from "./Components/Logot"
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


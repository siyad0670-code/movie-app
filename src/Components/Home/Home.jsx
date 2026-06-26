import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "Home/Home.css"


function Home() {
  const [movieName,setMovieName]=useState("")
  const [movies,setMovies]=useState([])
  const [favorites,setFavourites]=useState([])
  const [loading,setLoading]=useState(false)
  const searchBtn=async()=>{
    setLoading(true)

    const response=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=8f70dcfff1c1a05d2b6adf5bb4616be1&query=${movieName}`)
    const data=await response.json()
    setMovies(data.results)
    console.log(data.results);
    setLoading(false)

    
  }
  const FavoriteBtnHandle=(movie)=>{
    const updated=[...favorites,movie]
    setFavourites(updated)
    
     localStorage.setItem("favorites",JSON.stringify(updated))
    
  }
  
  
  
  return (
    <div className='home'>
        <h1>Home page</h1>
        <div className='navbar'>
        <Link to={"/"}>Home</Link>
        <Link to={'/favorites'}>Favourites</Link>
        <Link to={"/logout"}>Logout</Link>
        <Link to={"/login"}>Login_Signup</Link>
        </div>
        <br />
        <br /><br />
        <div className='search-section'>
        <input className='search-input' type="text" placeholder='Movie Name' onChange={(e)=>setMovieName(e.target.value)} />       
        <button className='search-btn' onClick={searchBtn}>Search</button> 
       
        {loading && <h2>Loding..</h2>}
         </div>
         <div className='movies-info'>
        <h3>Found:{movies.length}  movies</h3>
        <h3>Favoutites Movies:{favorites.length}</h3>
        </div>
        {favorites.map(movie=>movie.title+" , ")}
        
        <br /><br />
        <div className='movie-container'>
        {movies.map((movie,index)=>{
          return(
            
          <div className='movie-card'  key={index}>
          <h1>{movie.title}</h1>
          <h5>Overview:{movie.overview}</h5>
          <img style={{width:"100%",
            height:"300px",
            objectFit:"cover"

          }} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="image is not found" />
          

          
          <br /><br />
          <button onClick={()=>FavoriteBtnHandle(movie)}>Add To Favourite</button> 
            </div>
           
        )
        })}
          </div>
      
    </div>
  )
}

export default Home

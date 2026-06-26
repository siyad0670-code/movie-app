import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
    <div>
        <h1>Home page</h1>
        <Link to={"/"}>Home</Link>
        <Link to={'/favorites'}>Favourites</Link>
        <Link to={"/logout"}>Logout</Link>
        <Link to={"/login"}>Login_Signup</Link>
        <br />
        <br /><br />
        <input type="text" placeholder='Movie Name' onChange={(e)=>setMovieName(e.target.value)} />       
        <button onClick={searchBtn}>Search</button> 
        {loading && <h2>Loding..</h2>}
        <h3>Found:{movies.length}  movies</h3>
        <h3>Favoutites Movies:{favorites.length}</h3>
        {favorites.map(movie=>movie.title+" , ")}
        
        <br /><br />
        <div style={{display:"flex",
              flexWrap:"wrap",
              
            }}>
        {movies.map((movie,index)=>{
          return(
            
          <div style={{width:250,
            border:"1px solid black",
            padding:"10px",
            margin:"10px",
            
            
          }} key={index}>
          <h1>{movie.title}</h1>
          <p>{movie.release_date}</p>
          <h4>Rating:{movie.vote_average}</h4>
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

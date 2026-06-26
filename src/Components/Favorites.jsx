import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Favorites() {
  const [favorites,setFavourites]=useState([])
  useEffect(()=>{
    const data=JSON.parse(localStorage.getItem("favorites")) || []
    setFavourites(data)
  },[])
  const RemoveHandle=(index)=>{
    const updated=favorites.filter((obj,i)=>i!==index)
    setFavourites(updated)
    localStorage.setItem("favorites",JSON.stringify(updated ))
  }
 
  
  
  return (
    <div>
        <h1>Favarite page</h1>
        <Link to={"/"}>Home</Link>
        <div style={{display:"flex",
              flexWrap:"wrap",
              
            }}>
        {favorites.map((movie,index)=>{
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
          <button onClick={()=>RemoveHandle(index)}>Remove Favourite..</button>
          
            </div>
           
        )
        })}
          </div>
        
        
      
    </div>
  )
}

export default Favorites

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./Favorites.css"

function Favorites() {
  const [favorites, setFavourites] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavourites(data);
  }, []);

  const RemoveHandle = (index) => {
    const updated = favorites.filter((obj, i) => i !== index);
    setFavourites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
     <div>
      
       <h1 className=''>Favorite Page</h1>
       < Link className='home-link' to={"/"}>Home</Link>
       <div className='movie-container'>

        {favorites.map((movie, index) => (
          <div className='movie-card' key={index}>
            <h1>{movie.title}</h1>
            <h5>Overview: {movie.overview}</h5>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="image not found"
            />
            <br /><br />
            <button onClick={() => RemoveHandle(index)}>Remove Favourite</button>
          </div>
        ))}
        </div>
      
    
    </div>
  );
}

export default Favorites;

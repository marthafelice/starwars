import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function FilmList() {
    const [films, setFilms] = useState([]);
  
    useEffect(() => {
      fetch('https://swapi.dev/api/films')
        .then(response => response.json())
        .then(data => setFilms(data.results))
        .catch(error => console.log(error));
    }, []);
  
    return (
      <div className= "movies-grid" style={{color:'white'}}>
        <div>
        {films.map(film => (
          <div className="movie-card-content" key={film.episode_id}>
            <h2>{film.title}</h2>
            <p className='movie-info'>{film.opening_crawl.slice(0, 100)}...</p>
            <Link to={`/films/${film.episode_id}`}>More info</Link>
          </div>
        ))}
      </div>
      </div>
    );
  }
export default FilmList  


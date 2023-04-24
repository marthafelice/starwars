import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function MovieCards() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get('https://swapi.dev/api/films');
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

 return(
    <div className="App">
        
      <div className="movies-grid">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.episode_id}>
            <div className="movie-card-content">
              <h3>{movie.title}</h3>
              <p>{movie.release_date}</p>
              <p className='movie-info'>{movie.opening_crawl.slice(0, 100)}...</p>
              {/* <a href="#">More info</a> */}
            </div>
            <a href="none" className="more-info">
              More info
            </a>
          </div>
        ))}
      </div>
    </div>
    )
}

export default MovieCards;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CardGrid from './components/CardGrid';

function MovieCards() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    const fetchMovies = async () => {
      const { data } = await axios.get('https://swapi.dev/api/films')
      .catch(error => setError("An error occured"))
      setMovies(data.results);
      setLoading(false)
    };
    fetchMovies();
  }, []);

 return(
    <div className="App">
      {error && <div className='notify'>{error}</div>}
      {loading ? <div className='notify'>Loading movies... </div> : movies.length > 0 ? <CardGrid movies={movies}/> : <div className='notify'>No movies </div>}
        
    </div>
    )
}

export default MovieCards;

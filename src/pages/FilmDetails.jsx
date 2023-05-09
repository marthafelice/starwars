import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Film from './Film';

function FilmDetails() {
  const { episodeId } = useParams();

  const [film, setFilm] = useState(null);

  useEffect(() => {
    if (episodeId) {
      fetch(`https://swapi.dev/api/films/${episodeId}`)
        .then(response => response.json())
        .then(data => setFilm(data))
        .catch(error => console.log(error));
    }
  }, [episodeId]);

  if (!episodeId) {
    return <div>No episode selected</div>;
  }

  if (!film) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Film film={film} />
    </div>
  );
}

export default FilmDetails;




import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Film from './Film';
import axios from "axios"

function FilmDetails() {
  const { episodeId } = useParams();
  const [film, setFilm] = useState(null);
  const [filmData, setFilmData] = useState([])

  useEffect(() => {
    if (episodeId) {
      fetch(`https://swapi.dev/api/films/${episodeId}`)
        .then(response => response.json())
        .then(data => setFilm(data))
        .catch(error => console.log(error));
    }
  }, [episodeId]);

  const fetchData = async (urlArray) =>{
    const result = await Promise.all(urlArray.map((url) => axios.get(url)))
    return result.map((res) => res.data);
  }
  useEffect(() =>{
    const getFilmSectionData = async () =>{
      try{
        const [characters, planets, species, starships, vehicles] = await Promise.all([
             fetchData(film.characters),
             fetchData(film.planets),
             fetchData(film.species),
             fetchData(film.starships),
             fetchData(film.vehicles)]
           )
          //  console.log(characters);
           setFilmData({...film, characters, planets, species, starships, vehicles})
         }
         catch(err){
         console.log(err);
         }
    }
    getFilmSectionData()
  }, [film])

  useEffect(()=>{
    // console.log(filmData, "filmdata");
  }, [filmData])

  if (!episodeId) {
    return <div>No episode selected</div>;
  }

  if (!film) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Film film={filmData} />
    </div>
  );
}

export default FilmDetails;




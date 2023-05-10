import { Link } from 'react-router-dom';
import DetailsSection from '../components/DetailsSection';
function Film(props) {
    const { film } = props;
    
    
    return (
      <div className="movie-detail-container"  style={{color:'white'}}>
        <p><Link to="/">Back to list</Link></p>
        <div className='header'>
        <div><h2>{film.title}</h2></div>
        <div><p>Director: {film.director}</p></div>
        <div><p>Producer: {film.producer}</p></div>
        </div>
<DetailsSection title={'Description'} description={film.opening_crawl}/>
        {/* <div className='fields'>
          <h3>Description:</h3>
          <p>{film.opening_crawl}</p>
        </div> */}
<DetailsSection title={'Characters'} list={film.characters}/>
<DetailsSection title={'Planets'} list={film.planets}/>
<DetailsSection title={'Species'} list={film.species}/>
<DetailsSection title={'Starships'} list={film.starships}/>
<DetailsSection title={'Vehicles'} list={film.vehicles}/>

        {/* <div className='fields'>
          <h3>Characters:</h3>
          <ul>
        {film.characters.map((character, index) => (
          <li key={index}>{character.name}</li>
        ))}
      </ul>
        </div> */}

        {/* <div className='fields'>
          <h3>Planets:</h3>
          <ul>
            <li>{film.planets}</li>
            </ul>
          
        </div> */}

        {/* <div className='fields'>
          <h3>Species:</h3>
          <ul>
            <li>{film.species}</li>
            </ul>
        </div>

        <div className='fields'>
          <h3>Starships:</h3>
          <ul>
            <li>{film.starships}</li>
            </ul>
        </div>

        <div className='fields'>
          <h3>Vehicles:</h3>
          <ul>
            <li>{film.vehicles}</li>
            </ul>
        </div> */}
  
      </div>

    );
  }
  export default Film 
  

  
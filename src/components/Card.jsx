const Card = ({movie}) =>{
    return(
        <div className="movie-card">
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
    )
}

export default Card
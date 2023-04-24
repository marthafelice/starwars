import Card from "./Card"
const CardGrid = ({movies}) =>{
    return(
        <div className="movies-grid">
        {movies.map((movie) => <Card key={movie.episode_id} movie={movie}/>)}
      </div>
    )
}
export default CardGrid
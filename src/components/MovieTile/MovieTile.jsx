import React from "react";
import {useHistory} from "react-router";
import "./MovieTile.scss";


const MovieTile = ({imdbID, Title, Poster, Year}) => {
  const history = useHistory();
  const showDetails = () => {
    history.push(`/movie/${imdbID}`);
  }
  return <div className="col-12 movie-tile dark-background">
    <img className="movie-tile-poster" src={Poster} onError={(e)=>{e.target.onerror = null; e.target.src="http://via.placeholder.com/300x450"}}
         alt={Title}/>
    <section className="movie-tile-description">
      <h3>{Title} / {Year}</h3>
      <button className='btn btn-primary' data-testid="read-more" onClick={showDetails}>Read More</button>
    </section>


  </div>
}

export default MovieTile;
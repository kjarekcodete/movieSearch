import React from "react";
import {useHistory} from "react-router";
import "./MovieTile.scss";


const MovieTile = ({imdbID, Title, Poster, Year }) => {
    const history = useHistory();
    const showDetails = () => {
      history.push(`/movie/${imdbID}`);
    }
    return <div  className="movie-tile dark-background" >
            <img className="movie-tile-poster" src={Poster}
                 alt={Title} />
        <section>
            <h2>{Title}</h2>
            <h3>{Year}</h3>
            <button className='btn btn-primary' data-testid="read-more" onClick={showDetails}>Read More</button>
        </section>


    </div>
}

export default MovieTile;
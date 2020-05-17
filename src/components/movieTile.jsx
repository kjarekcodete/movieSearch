import React from "react";
import {useHistory} from "react-router";


const MovieTile = ({imdbID, Title, Poster, Year }) => {
    const history = useHistory();
    const showDetails = () => {
      history.push(`/movie/${imdbID}`);
    }
    return <div onClick={showDetails}>
        <img src={Poster}/>
        <h1>{Title}</h1>
        <h1>{Year}</h1>
    </div>
}

export default MovieTile;
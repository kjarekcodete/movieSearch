import React, {useContext, useEffect, useState, useCallback} from 'react';
import MovieContext from "../context/movieContext";
import {getMovie} from "../lib/api/getMovies";
import {useParams} from "react-router";

const Movie = () => {
    const {details, updateDetails} = useContext(MovieContext);
    const {movieId} = useParams();
    const [movieDescription, setMovieDescription] = useState({});
    const fetchDetails = useCallback(async () => {
        const {data} = await getMovie(movieId);
        const newDetails = {...details};
        newDetails[movieId] = data;
        updateDetails(newDetails);
        setMovieDescription(data);
    }, [movieId, details, updateDetails]);

    useEffect(() => {
        if(details[movieId]){
            setMovieDescription(details[movieId]);
        } else {
            fetchDetails();
        }
    }, [fetchDetails, movieId])


    return <div>
        <h1>{movieDescription.Title}</h1>
    </div>
}

export default Movie;
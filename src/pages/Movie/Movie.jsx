import React, {useContext, useEffect, useState, useCallback} from 'react';
import MovieContext from "../../context/movieContext";
import {getMovie} from "../../lib/api/getMovies";
import {useParams} from "react-router";

import './Movie.scss';
import PageHeader from "../../components/PageHeader/PageHeader";

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
    }, [fetchDetails, movieId, details])

    return <article className="container movie-page">
        <PageHeader customClassName={"movie-page-header dark-background"} title={movieDescription.Title}/>
        <section className="movie-page-content dark-background ">
            <img className="movie-page-poster" src={movieDescription.Poster} alt={movieDescription.Title}/>
            <main className="movie-page-description">
                <dl className="movie-page-info">
                    <dt>Director: </dt>
                    <dd>{movieDescription.Director}</dd>
                    <dt>Actors: </dt>
                    <dd>{movieDescription.Actors}</dd>
                    <dt>Awards: </dt>
                    <dd>{movieDescription.Awards}</dd>
                    <dt>Country: </dt>
                    <dd>{movieDescription.Country}</dd>
                    <dt>Genre: </dt>
                    <dd>{movieDescription.Genre}</dd>
                    <dt>Rating imdb: </dt>
                    <dd>{movieDescription.imdbRating}</dd>
                    <dt>Runtime: </dt>
                    <dd>{movieDescription.Runtime}</dd>
                </dl>
                <p>
                    {movieDescription.Plot}
                </p>
            </main>
        </section>
    </article>
}

export default Movie;

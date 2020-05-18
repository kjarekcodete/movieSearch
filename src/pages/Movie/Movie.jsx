import React, {useContext, useEffect, useState, useCallback} from 'react';
import MovieContext from "../../context/movieContext";
import {getMovie} from "../../lib/api/getMovies";
import {useParams} from "react-router";
import {useHistory} from "react-router";

import './Movie.scss';
import PageHeader from "../../components/PageHeader/PageHeader";

const Movie = () => {
    const history = useHistory();
    const {details, updateDetails} = useContext(MovieContext);
    const {movieId} = useParams();
    const [movieDescription, setMovieDescription] = useState({});
    const [movieError, setMovieError] = useState(null);
    const fetchDetails = useCallback(async () => {
        try {
            const {data} = await getMovie(movieId);
            if(data.Error){
                setMovieError('we are unable to find more information')
            } else {
                const newDetails = {...details};
                newDetails[movieId] = data;
                updateDetails(newDetails);
                setMovieDescription(data);
            }

        } catch (err) {
            history.push('/notFound');
        }

    }, [movieId, details, updateDetails, history]);


    useEffect(() => {
        if(details[movieId]){
            setMovieDescription(details[movieId]);
        } else {
            fetchDetails();
        }
    }, [fetchDetails, movieId, details])

    return <article className="container movie-page">
        <PageHeader customClassName={"movie-page-header dark-background"} title={!movieError ?movieDescription.Title : movieError}/>
        {!movieError && <section className="movie-page-content dark-background ">
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
        </section> }
    </article>
}

export default Movie;

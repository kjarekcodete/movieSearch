import {http} from './apiBase';

const getMovies = (movieTitle, year = '') => http.get('', { params: {
    s: movieTitle,
    y: year
    }});

const getMovie = (movieId) => http.get('', { params: {
        i: movieId,
    }});


export {getMovie, getMovies}
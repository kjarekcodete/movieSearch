import React, {useContext, useEffect, useState} from 'react';
import {getMovies} from "../../lib/api/getMovies";
import MovieContext from "../../context/movieContext";
import {useParams} from "react-router";
import MovieTile from "../../components/MovieTile";

const MovieList = () => {
    const {movies, updateMovies} = useContext(MovieContext);
    const {title, year} = useParams();
    const [results, setResults] = useState([]);
    let titleKey = title.toLowerCase();

    const checkIfExist = async (title) => {
        if (movies[title]){
            setResults(movies[title])
        } else {
            try {
                const {data} = await getMovies(title, year);
                const searchResult = data.Search.filter(el => el.Type !== 'game');
                setResults(searchResult)

                const newMovie = {...movies};
                newMovie[title] = searchResult;
                updateMovies(newMovie)
            } catch(err){
            }
        }
    }

    useEffect(() => { checkIfExist(titleKey) }, [titleKey])

    return <div>
        { results && results.map(el =>  <MovieTile key={el.imdbID} {...el}/>)}
    </div>
}




export default MovieList;
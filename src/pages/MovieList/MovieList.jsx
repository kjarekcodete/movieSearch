import React, {useCallback, useContext, useEffect, useState} from 'react';
import {getMovies} from "../../lib/api/getMovies";
import MovieContext from "../../context/movieContext";
import {useParams} from "react-router";
import MovieTile from "../../components/MovieTile/MovieTile";

const MovieList = () => {
    const {movies, updateMovies} = useContext(MovieContext);
    const {title, year} = useParams();
    const [results, setResults] = useState([]);
    let titleKey = year ? `${title}/${year}` : title;

    const checkIfExist = useCallback(async (title, titleKey, year) => {
        if (movies[titleKey]){
            setResults(movies[titleKey])
        } else {
            try {
                const {data} = await getMovies(title, year);
                const searchResult = data.Search.filter(el => el.Type !== 'game');
                setResults(searchResult)
                const newMovie = {...movies};
                newMovie[titleKey] = searchResult;
                updateMovies(newMovie)
            } catch(err){
            }
        }
    }, [title, titleKey, year])

    useEffect(() => { checkIfExist(title, titleKey, year) }, [title, titleKey, year, checkIfExist])

    return <section className='container list-page'>
        <header className="list-page-header dark-background">
            <h1>Search results: {title}</h1>
        </header>
        <main className='list-page-results'>
            { results && results.map(el =>  <MovieTile key={el.imdbID} {...el}/>)}
        </main>

    </section>
}




export default MovieList;
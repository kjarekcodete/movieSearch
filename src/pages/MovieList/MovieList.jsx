import React, {useCallback, useContext, useEffect, useState} from 'react';
import {getMovies} from "../../lib/api/getMovies";
import {useHistory} from "react-router";
import MovieContext from "../../context/movieContext";
import {useParams} from "react-router";
import MovieTile from "../../components/MovieTile/MovieTile";
import PageHeader from "../../components/PageHeader/PageHeader";

import './MovieList.scss';


const MovieList = () => {
    const {movies, updateMovies} = useContext(MovieContext);
    const [loader, setLoader] = useState(false);
    const history = useHistory();
    const {title, year} = useParams();
    const [results, setResults] = useState([]);
    let titleKey = year ? `${title}/${year}` : title;

    const checkIfExist = useCallback(async (title, titleKey, year) => {
        if (movies[titleKey]){
            setResults(movies[titleKey])
        } else {
            try {
                setLoader(true);
                const {data} = await getMovies(title, year);
                const searchResult = data.Search.filter(el => el.Type !== 'game');
                setLoader(false);
                setResults(searchResult)
                const newMovie = {...movies};
                newMovie[titleKey] = searchResult;
                updateMovies(newMovie)
            } catch(err){
                history.push('/notFound')
            }
        }
    }, [updateMovies, movies, history, setLoader])

    useEffect(() => { checkIfExist(title, titleKey, year) }, [title, titleKey, year, checkIfExist])

    return <section className='container list-page'>
        <PageHeader customClassName={"dark-background"} title={`You serched ${title}`}/>
        <main className='list-page-results'>
            {loader ? <div className="spinner-border text-light text-center" role="status">
                  <span className="sr-only">Loading...</span>
              </div> :
              (results && results.map(el => <MovieTile key={el.imdbID} {...el}/>))
            }


        </main>

    </section>
}




export default MovieList;
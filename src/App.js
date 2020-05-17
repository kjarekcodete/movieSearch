import React, {useState} from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import './App.css';
import SearchPage from "./pages/searchPage";
import MovieList from "./pages/movieList";
import Movie from "./pages/movie";

import {MovieProvider} from "./context/movieContext";

import MOVIES from "./mock";

const App = () => {
    const [movies, setMovies] = useState(MOVIES);
    const [details, setDetails] = useState({})
    const updateMovies = (movies) => {
        setMovies(movies);
    }
    const updateDetails = (details) => {
        setDetails(details);
    }

  return <MovieProvider value={{
      movies,
      details,
      updateMovies,
      updateDetails
  }}>
      <Switch>
          <Route  path="/movie-list/:title/:year?"><MovieList/></Route>
          <Route  path="/movie/:movieId"><Movie/></Route>
          <Route path="/"> <SearchPage/> </Route>
      </Switch>
  </MovieProvider>
}

export default App;

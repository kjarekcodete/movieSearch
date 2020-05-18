import React, {useState} from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import './App.scss';
import SearchPage from "./pages/SearchPage/SearchPage";
import MovieList from "./pages/MovieList/MovieList";
import Movie from "./pages/Movie/Movie";
import NotFound from "./pages/NotFound/NotFound";

import {MovieProvider} from "./context/movieContext";

import {MOVIES} from "./mock";

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
          <Route exact={true} path="/movie-list/:title/:year?"><MovieList/></Route>
          <Route exact={true} path="/movie/:movieId"><Movie/></Route>
          <Route exact={true} path="/"> <SearchPage/> </Route>
          <Route exact={true} path="*"> <NotFound/> </Route>
      </Switch>
  </MovieProvider>
}

export default App;

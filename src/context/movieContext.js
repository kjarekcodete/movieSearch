import React from "react";

const MovieContext = React.createContext({
    movies: {},
    details: {},
    updateDetails: () => {},
    updateMovies: () => {}
});

export const MovieProvider = MovieContext.Provider;

export default MovieContext;
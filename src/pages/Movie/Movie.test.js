import React from "react";
import {render} from "@testing-library/react";
import {MemoryRouter, Route} from "react-router";
import Movie from "./Movie";
import {MovieProvider} from "../../context/movieContext";
import {DETAILS} from "../../mock";
import MovieTile from "../../components/MovieTile/MovieTile";

const setup = (details) => {
    const utils = render(
        <MemoryRouter initialEntries={[`/movie/tt0103064`]}>
            <Route path="/movie/:movieId">
                <MovieProvider value={{details}}>
                    <Movie/>
                </MovieProvider>
            </Route>
        </MemoryRouter>
    )
    return {
        ...utils,
    }
}

test('Movie shows proper value from consumer', () => {
    const {getByText} = setup(DETAILS);
    expect(getByText('James Cameron')).toBeTruthy();
})
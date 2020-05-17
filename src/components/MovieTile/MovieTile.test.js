import React from "react";
import MovieTile from './MovieTile';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import {render, fireEvent} from "@testing-library/react";

const setup = () => {
    const props = {
        "Title": "Terminator 2: Judgment Day",
        "Year": "1991",
        "imdbID": "tt0103064",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    }
    const history = createMemoryHistory();
    const utils = render(<Router history={history}><MovieTile {...props} /></Router>)
    const readButton = utils.getByTestId('read-more');
    return {
        readButton,
        history,
        ...utils,
    }
}

test('It should update url with movie title and year', () => {
    const {readButton, history,} = setup();
    fireEvent.click(readButton);
    expect(history.location.pathname).toBe('/movie/tt0103064')
})
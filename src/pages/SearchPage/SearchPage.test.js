import React from "react";
import SearchPage from "./SearchPage";
import {Router} from 'react-router-dom'
import {createMemoryHistory} from 'history'
import {render, fireEvent} from "@testing-library/react";

const setup = () => {
  const history = createMemoryHistory();
  const utils = render(<Router history={history}><SearchPage/></Router>)
  const movieTitle = utils.getByTestId('movieTitle');
  const year = utils.getByTestId('year');
  const search = utils.getByTestId('search-button');
  return {
    movieTitle,
    year,
    search,
    history,
    ...utils,
  }
}

test('It should has value and change to lower case', () => {
  const {movieTitle} = setup();
  fireEvent.change(movieTitle, {target: {value: 'Terminator'}});
  expect(movieTitle.value).toBe('terminator');

})

test('It should display error-message', () => {
  const {search, getByTestId} = setup();
  fireEvent.click(search);
  getByTestId('validation-error')
  expect(getByTestId('validation-error')).toBeTruthy();
})

test('It should update url with movie title', () => {
  const {movieTitle, history, search} = setup();
  fireEvent.change(movieTitle, {target: {value: 'Terminator'}});
  fireEvent.click(search);
  expect(history.location.pathname).toBe('/movie-list/terminator')
})

test('It should update url with movie title and year', () => {
  const {movieTitle, history, search, year} = setup();
  fireEvent.change(movieTitle, {target: {value: 'Terminator'}});
  fireEvent.change(year, {target: {value: '1991'}});
  fireEvent.click(search);
  expect(history.location.pathname).toBe('/movie-list/terminator/1991')
})
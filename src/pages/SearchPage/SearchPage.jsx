import React, {useState} from "react";
import {useHistory} from "react-router";
import './SearchPage.scss';

const SearchPage = () => {
  const history = useHistory();
  const [keyword, setKeyword] = useState('');
  const [year, setYear] = useState('');
  const [error, setError] = useState(null)
  const updateSearch = (e) => {
    setKeyword(e.target.value);
  }
  const updateYear = (e) => {
    setYear(e.target.value);
  }
  const submition = (e) => {
    e.preventDefault();
    if (keyword.length) {
      let url = `/movie-list/${keyword.toLowerCase()}`
      if (year.length) url += `/${year}`;
      history.push(url);
      setError(null);
    } else {
      setError('Movie Title Field is required')
    }

  }
  return <section className="container dark-background search-page h-50">
    <header className="search-page-header">
      <h1>Movie Search App</h1>
    </header>
    <main className="search-page-content">
      <form className="form-inline" onSubmit={submition}>
        <div className="form-group mx-sm-3 mb-2">
          <label form="movieTitle" className="sr-only">Movie title</label>
          <input className="form-control" name="movieTitle" data-testid="movieTitle" type="text"
                 placeholder='Movie Title' required={true} value={keyword} onChange={updateSearch}/>
        </div>
        <div className="form-group mx-sm-3 mb-2">
          <label form="year" className="sr-only">Production Year</label>
          <input className="form-control" placeholder='Production Year' data-testid="year" name="year" type="text"
                 value={year} onChange={updateYear}/>
        </div>
        <button className="btn btn-primary mb-2" data-testid="search-button" onClick={submition}> Search</button>
      </form>
      {error && <div data-testid="validation-error" className="alert alert-danger" role="alert">
        {error}
      </div>}

    </main>
  </section>


}


export default SearchPage;
import React, {useEffect, useState}  from "react";
import {getMovies} from "../lib/api/getMovies";


const SearchInput = () => {
    const [keyword, setKeyword] = useState('');
    const updateSearch = (e) => {
      setKeyword(e.target.value);
    }

    const search = async () => {
        console.log(keyword)
        try{
            const movies = await getMovies(keyword);
            console.log(movies);
        } catch (err) {
            console.log(err)
        }
    }
    return <>
        <input name="search" type="text" value={keyword} onChange={updateSearch}/>
        <button onClick={search}>Search</button>
        </>

}

export default SearchInput
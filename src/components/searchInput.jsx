import React, {useState}  from "react";
import {useHistory} from "react-router";


const SearchInput = () => {
    const history = useHistory();
    const [keyword, setKeyword] = useState('');
    const updateSearch = (e) => {
      setKeyword(e.target.value.toLowerCase());
    }
    const search =  () => {
        history.push(`/movie-list/${keyword}`);
    }
    return <>
        <input name="search" type="text" value={keyword} onChange={updateSearch}/>
        <button onClick={search}>Search</button>
        </>

}

export default SearchInput
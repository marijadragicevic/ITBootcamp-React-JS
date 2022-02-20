import React, { useState } from "react";

const Search = ({ handleMovieSearch }) => {
    const [searchValue, setSearchValue] = useState("");

    const handleChange = e => {
        setSearchValue(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        handleMovieSearch(searchValue);
        setSearchValue("");
    }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input type="text" value={searchValue} className="search-input" placeholder="Enter movie or TV show" onChange={handleChange} />
            <button type="submit" className="search-button">Search</button>
        </form>
    )
}
export default Search;
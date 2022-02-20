import React from "react";
import MoviesListItem from "./MoviesListItem.js"
import "./style.css";

const MoviesList = ({ movies }) => {
    return (
        <div className="movies">
            {movies.map(movie =>
                (<MoviesListItem key={movie.imdbID} movie={movie} />)
            )}
        </div >
    );
}

export default MoviesList;
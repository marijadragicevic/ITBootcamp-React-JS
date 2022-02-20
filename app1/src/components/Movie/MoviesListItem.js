import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const NO_IMAGE_FOUND = "https://i.ytimg.com/vi/np4n2DIOKVM/maxresdefault.jpg";

const MoviesListItem = ({ movie }) => {
    const poster = movie.Poster === "N/A" ? NO_IMAGE_FOUND : movie.Poster;

    return (
        <div className="movieContainer">
            <h2>{movie.Title}</h2>
            <Link to={`/movieDetails/${movie.imdbID}`}>
                <img src={poster} alt={`The movie title ${movie.Title}`} />
            </Link>
        </div>)
}

export default MoviesListItem;

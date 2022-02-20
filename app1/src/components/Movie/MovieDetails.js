import React, { useEffect, useState } from "react";
import API from "../../config/api";
import { apiKey } from "../../config/apiKey";
import { useParams, useNavigate } from "react-router-dom";
import "./style.css";
import { VscStarFull } from "react-icons/vsc";


const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState("");

    const navigate = useNavigate();

    useEffect(async () => {
        await API.get(`?i=${movieId}&${apiKey}`)
            .then(res => {
                setMovie(res.data);
            });
    }, []);

    const handleBackButton = () => {
        navigate(-1);
    };



    return (
        <div className="container" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.89),rgba(20,20,20,0.7)),url(${movie.Poster})` }}>
            <h2>{movie.Title} </h2>
            <section>
                <img src={movie.Poster} alt={movie.Title} />

                <div className="movieDetailsContent">
                    <h4> <VscStarFull style={{ color: "rgb(255, 208, 0)" }} />{movie.imdbRating} About movie...</h4>
                    <p>{movie.Plot}</p>
                    <ul>
                        <li><span>Release date: </span> {movie.Released}</li>
                        <li><span>Runtime: </span> {movie.Runtime}</li>
                        <li><span>Genre: </span> {movie.Genre}</li>
                        <li><span>Director: </span> {movie.Director}</li>
                        <li><span>Writers: </span> {movie.Writer}</li>
                        <li><span>Actors: </span> {movie.Actors}</li>
                        <li><span>Language: </span> {movie.Language}</li>

                    </ul>
                </div>
            </section>
            <button type="button" className="btnBack" onClick={handleBackButton}> Back</button>
        </div>
    );
}

export default MovieDetails;
import React, { useEffect, useReducer } from "react";
import API from "../config/api";
import { initialState, reducer } from "../reducer";
import { apiKey } from "../config/apiKey";
import { SEARCH_MOVIES_REQUEST, SEARCH_MOVIES_SUCCESS, SEARCH_MOVIES_FAILED } from "../reducer/types"
import MoviesList from "../components/Movie/MoviesList";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import Loading from "../components/Loading/Loading";
import Search from "../components/Search/Search";

const Home = () => {
    // const [state, dispatch] = useReducer(reducerName, initialState);
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);
    const { movies, errorMessage, loading } = state;

    const handleMovieSearch = (movie) => {
        API.get(`?s=${movie}&${apiKey}`)
            .then(res => {
                console.log(res.data);
                if (res.data.Response === "True") {
                    dispatch({
                        type: SEARCH_MOVIES_SUCCESS,
                        payload: res.data.Search,
                    });
                }
                else {
                    dispatch({
                        type: SEARCH_MOVIES_FAILED,
                        payload: res.data.Error,
                    });
                }
            });
    };


    useEffect(() => {
        handleMovieSearch("Spider-Man");
    }, []);

    return (
        <div>
            <Search handleMovieSearch={handleMovieSearch} />
            {loading && !errorMessage
                ? (<Loading />
                ) : errorMessage ? (
                    < ErrorMessage > {errorMessage}</ErrorMessage>
                ) : (<MoviesList movies={movies} />
                )}
        </div >
    )
}
export default Home;
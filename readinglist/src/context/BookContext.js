import React, { createContext, useReducer } from "react";
import { BookReducer } from "../reducer/BookReducer";

export const BookContex = createContext();

// useReducer(reducer,initialState)

const BookContexProvider = ({ children }) => {
    const [books, dispatch] = useReducer(BookReducer, [
        { id: 0, title: "Na Drini cuprija", autor: "Ivo Andric" }
    ]);

    return (
        <BookContex.Provider value={{ books, dispatch }} >
            {children}
        </BookContex.Provider>
    )
}

export default BookContexProvider;
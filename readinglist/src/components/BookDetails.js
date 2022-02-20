import React, { useContext } from "react";
import { BookContex } from "../context/BookContext";

const BookDetails = ({ book }) => {
    const { dispatch } = useContext(BookContex);

    const handleDelete = () => {
        dispatch({
            type: "REMOVE_BOOK",
            payload: { id: book.id }
        })
    }

    return (
        <div>
            <h3>{book.title}</h3>
            <h5>{book.author}</h5>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default BookDetails;
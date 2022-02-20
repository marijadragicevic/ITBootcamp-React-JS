import React, { useContext, useState } from "react";
import { BookContex } from "../context/BookContext";

const BookForm = () => {
    const { dispatch } = useContext(BookContex);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        setError("");
        if (!title.trim() || !author.trim()) {
            setError("you need to insert text in all fields");
            return;
        }

        dispatch({
            type: "ADD_BOOK",
            payload: {
                title, author
            }
        });

        setTitle("");
        setAuthor("");
    }

    return (
        <form onSubmit={handleSubmit}>
            {error ? <strong>{error}</strong> : null}
            <input
                type="text"
                placeholder="Book title"
                value={title}
                onChange={e => { setTitle(e.target.value) }}
            />
            <input
                type="text"
                placeholder="Author name"
                value={author}
                onChange={e => { setAuthor(e.target.value) }}
            />

            <input type="submit" value="Add book" />
        </form>
    )
};

export default BookForm;
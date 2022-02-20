import React, { useContext } from "react";
import { BookContex } from "../context/BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
    const { books } = useContext(BookContex);

    return (
        <div>
            {books.map(book => (
                <BookDetails key={book.id} book={book} />
            ))}
        </div>
    )
}

export default BookList;
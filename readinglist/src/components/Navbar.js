import React, { useContext } from 'react';
import { BookContex } from '../context/BookContext';

const NavBar = () => {
    const { books } = useContext(BookContex);

    return (
        <div>
            <h1>My reading list:</h1>
            <p>Currently I have {books.length} books to read </p>
        </div>
    )
}

export default NavBar;
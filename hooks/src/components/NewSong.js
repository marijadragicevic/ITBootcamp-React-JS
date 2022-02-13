import React, { useState } from "react";

const NewSong = ({ addSong }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        addSong(title);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Song name:</label>
            <input type="text" onChange={e => { setTitle(e.target.value) }} />
            <input type="submit" value="Add song" />
        </form>
    );
};

export default NewSong;

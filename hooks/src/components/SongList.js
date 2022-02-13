import React, { useState } from "react";
import NewSong from "./NewSong";
import { v4 as uuidv4 } from 'uuid';

const SongLIst = () => {
    const [songs, setSongs] = useState([
        { title: "Shook ones", id: 0 },
        { title: "Juicy", id: 1 }
    ]);

    const addSong = (title) => {
        setSongs([...songs, { title, id: uuidv4() }])
    }

    return (
        <>
            <h2>My song list</h2>
            {songs.map((song, index) => {
                return <li key={index}>{song.title}</li>
            })}

            <NewSong addSong={addSong} />
        </>
    );
}

export default SongLIst;
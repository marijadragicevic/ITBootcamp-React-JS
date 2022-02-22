import React, { useState, useEffect } from "react";
import API from "../config/api";
import { Link } from "react-router-dom";

const Launches = () => {
    const [launches, setLaunches] = useState([])
    useEffect(() => {
        API.get("/launches").then(res => {
            setLaunches(res.data)
        })
    }, []);
    return (<div>
        <h3>Launches</h3>
        <ul>
            {launches.map(launche => (
                // mora drugi key;imaju iste
                <Link to={`/launches/${launche.flight_number}`}
                    key={launche.launche_id}>
                    {launche.mission_name}</Link>
            ))}
        </ul>


    </div >)
};

export default Launches;
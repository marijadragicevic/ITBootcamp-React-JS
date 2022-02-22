import React, { useState, useEffect } from "react";
import API from "../config/api";
import { Link } from "react-router-dom";

const Rockets = () => {
    const [rockets, setRockets] = useState([])
    useEffect(() => {
        API.get("/rockets").then(res => {
            setRockets(res.data);
            console.log(res.data);
        })
    }, []);
    return (<div>
        <h3>Rockets</h3>
        <ul>
            {rockets.map(rocket => (
                // mora drugi key;imaju iste
                <Link to={`/rockets/${rocket.rocket_id}`}
                    key={rocket.id}>
                    {rocket.rocket_name}</Link>
            ))}
        </ul>


    </div >)
};

export default Rockets;
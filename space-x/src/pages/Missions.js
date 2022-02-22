import React, { useEffect, useState } from "react";
import API from "../config/api";
import { Link } from "react-router-dom";

const Missions = () => {
    const [missions, setMissions] = useState([])
    useEffect(() => {
        API.get("/missions").then(res => {
            setMissions(res.data)
        })
    }, []);
    return (<div>
        <h3>Missions</h3>
        <ul>
            {missions.map(mission => (
                <Link to={`/missions/${mission.mission_id}`}
                    key={mission.mission_id}>
                    {mission.mission_name}</Link>
            ))}
        </ul>


    </div >)
};

export default Missions;
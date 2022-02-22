import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../config/api";


const MissionDetails = () => {
    const [mission, setMission] = useState("");
    const { id } = useParams();

    useEffect(() => {
        API.get(`/missions/${id}`).then(res => {
            setMission(res.data);
        })
    }, []);

    return (<div> MissionDetails {mission.mission_name}</div>)
};

export default MissionDetails;

// useEffect prima dva parametra arrow funkciju i niz
// [] niz definise onMounting
// neki state u nizu def kada se taj state promeni

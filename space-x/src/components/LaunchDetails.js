import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../config/api";


const LauncheDetails = () => {
    const [launche, setLaunche] = useState("");
    const { id } = useParams();

    useEffect(() => {
        API.get(`/launches/${id}`).then(res => {
            setLaunche(res.data);
        })
    }, []);

    return (<div>LauncheDetails {launche.mission_name}</div>)
};

export default LauncheDetails;

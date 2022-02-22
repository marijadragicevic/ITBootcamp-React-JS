import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../config/api";


const RocketDetails = () => {
    const [rocket, setRocket] = useState("");
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        API.get(`/rockets/${id}`).then(res => {
            setRocket(res.data);
            console.log(res.data);
        })
    }, []);

    return (<div>RocketDetails  {rocket.rocket_name}</div>)
};

export default RocketDetails;
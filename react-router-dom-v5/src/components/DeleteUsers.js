import axios from "axios";
import React, { useEffect, useState } from "react";
import API from "../config/api.js";

const DeleteUsers = ({ users, removeUser }) => {
    const [id, setId] = useState("");
    //console.log(users);

    const handleChange = e => {
        setId(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("handleSubmit function");
        const userID = id;
        const response = await API.delete(`users/${userID}`);
        if (response.status === 200) {
            console.log("response status", response.status);
            removeUser(id);
        }

        // console.log(users);
        // console.log(response);
        // console.log(response.data);
    };


    return (
        <div>
            <h4>Delete Users:</h4>

            <form onSubmit={handleSubmit}>
                <label>
                    User id: <input type="text" onChange={handleChange} />
                </label>
                <button type="submit">Delete</button>
            </form>
        </div>
    );
};

export default DeleteUsers;
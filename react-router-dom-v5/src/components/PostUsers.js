import React, { useState } from "react";
import API from "../config/api";

const PostUsers = () => {
    const [name, setName] = useState("");

    const handleChange = e => {
        setName(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        API.post("users", {
            user: { name, userName: "Maja", phoneNumber: "21312132123" }
        }).then(res => {
            console.log(res);
            console.log(res.data);
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                Person name:
                <input type="text" onChange={handleChange} />
                <button type="submit">Add person</button>
            </form>
        </>
    );

};

export default PostUsers;
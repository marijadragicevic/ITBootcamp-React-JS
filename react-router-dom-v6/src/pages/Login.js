import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        localStorage.setItem("isLogin", true);
        navigate("/about");
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input type="text" />
            <label>Password:</label>
            <input type="password" />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Login;
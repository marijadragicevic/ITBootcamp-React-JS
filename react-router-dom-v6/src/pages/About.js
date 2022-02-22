import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.setItem("isLogin", false);
        navigate("/login");
    }
    return (<div>If you are seeing this you are ......
        <button type="button" onClick={handleLogout}>Logout</button>
    </div>)
};

export default About;
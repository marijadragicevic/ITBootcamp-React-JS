import React from "react";
import MovieLogo from "../../images/logo2.png"
import "./app.css";
import AppNavbarTabs from "./AppNavbarTabs";
import AppNavbarUser from "./AppNavbarUser";

const AppNavbar = () => {
    return (<div className="navbar">
        <div className="navbar-content">
            <img src={MovieLogo} alt="React" style={{}} />
            <div className="navbar-tabs">
                <AppNavbarTabs />
            </div>

            <AppNavbarUser />
        </div>

    </div>)
}
export default AppNavbar;
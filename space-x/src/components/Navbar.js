// import { ReactComponent as Logo } from "../assets/SpaceX-Logo.png";
// kao logo komponentu uvezem u navbar komp
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav>
            {/* <Logo /> */}
            <Link to="/">Home</Link>
            <Link to="/missions">Missions</Link>
            <Link to="/rockets">Rockets</Link>
            <Link to="/launches">Launches</Link>

        </nav>
    )
};

export default Navbar;
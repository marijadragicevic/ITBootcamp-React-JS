import React, { useContext } from "react";
import { Context } from "../context/Context";

const Navbar = () => {
    const { todos } = useContext(Context);
    return (
        <div>Tods left on my list : {todos.length}</div>
    );
};

export default Navbar;
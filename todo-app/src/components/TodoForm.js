import React, { useState, useContext } from "react";
import { Context } from "../context/Context";

const TodoForm = () => {
    const { dispatch } = useContext(Context);
    const [title, setTitle] = useState("");

    const handleChange = e => {
        setTitle(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        title.trim() !== ""
            ? dispatch({
                type: "ADD_TODO",
                payload: { title },
            })
            : alert("Wrong input");

        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                placeholder="Enter your todo..."
                onChange={handleChange} />
            <input type="submit" value="Add todo" />
        </form>
    );
};

export default TodoForm;
import React, { useState } from "react";

const NewToDo = ({ addToDoItem }) => {
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addToDoItem(content);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => { setContent(e.target.value) }} placeholder="Enter text here...." />
            <input type="submit" value="Add ToDo Item" />
        </form>
    );
}

export default NewToDo;
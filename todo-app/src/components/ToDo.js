import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import NewToDo from "./NewToDo.js";

// ne ispisuje iz localStorage-a i ne menja broj todos kada brisem i nije stilizovano
const ToDoList = () => {
    const [items, setItems] = useState([
        // { content: "radi", id: 0 }
    ]);

    const addToDoItem = (content) => {
        if (content.trim() === "") {
            alert("Wrong input!")
        }
        else {
            setItems([...items, { content, id: uuidv4() }]);
        }
    }

    useEffect(() => {
        items.map(item => {
            localStorage.setItem(item.id, item.content);
        });
    }, [items])

    const handleDelete = (e) => {
        e.target.parentElement.parentElement.remove();
    }


    return (
        <>
            <h2>My ToDo List:</h2>
            <p>Pending todos: {items.length}</p>

            {
                items.map(item => {
                    return <li key={item.id}>{item.content} <span> <i className="fas fa-trash-alt" onClick={handleDelete}></i></span></li>

                })}

            <NewToDo addToDoItem={addToDoItem} />
        </>
    );
}

export default ToDoList;
import React, { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Context } from "../context/Context";

const TodoListItem = ({ todo }) => {
    const { dispatch } = useContext(Context);

    const handleDelete = (id) => {
        dispatch({
            type: "REMOVE_TODO",
            payload: { id }
        })
    };

    return (
        <li>
            {todo.title}
            <FaTrashAlt onClick={() => handleDelete(todo.id)} />
            {/* <input type="checkbox" onClick={handleCheck} /> */}
        </li>
    )

};

export default TodoListItem;
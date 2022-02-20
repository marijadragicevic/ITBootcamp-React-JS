import React, { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import { TODOS_KEY } from "../settings";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
    const { todos } = useContext(Context);

    useEffect(() => {
        localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
    }, [todos.length]);

    return (
        <ul>
            {todos.length
                ? todos.map(todo => <TodoListItem key={todo.id} todo={todo} />)
                : "Your finished all your todos :)"
            }
        </ul>
    );
};

export default TodoList;
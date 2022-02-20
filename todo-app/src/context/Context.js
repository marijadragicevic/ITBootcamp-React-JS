import React, { createContext, useEffect, useReducer } from "react";
import { Reducer } from "../reducer/Reducer";
import { TODOS_KEY } from "../settings";

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(Reducer, [], () => {
        const localData = localStorage.getItem(TODOS_KEY);
        return localData ? JSON.parse(localData) : [];
    });

    return (
        <Context.Provider value={{ todos, dispatch }}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
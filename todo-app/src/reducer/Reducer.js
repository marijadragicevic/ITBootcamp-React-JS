import { v4 as uuidv4 } from "uuid";

export const Reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, { id: uuidv4(), title: action.payload.title }];
        case "REMOVE_TODO":
            return [...state.filter(todo => todo.id !== action.payload.id)];
        // case "FINISHED":
        //     return [...state, { checked: false }];
        default:
            return state;
    }
};
import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [state, setState] = useState({
        isLightTheme: true,
        ligth: { syntax: "#555", ui: "#ddd", bg: "#eee" },
        dark: { syntax: "#ddd", ui: "#333", bg: "#555" }
    });

    const toggleTheme = () => {
        setState({ ...state, isLightTheme: !state.isLightTheme });
    };

    return (
        <ThemeContext.Provider value={{ ...state, toggleTheme: toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;
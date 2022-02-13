import React, { useState, useEffect } from "react";

const Counter1 = () => {
    // mozemo da imamo beskonacno useState-ova;
    const [state, setState] = useState({ counter: 4, color: "blue" });
    // console.log(state);
    // destructuring; imamo pristup proper iz objekta state
    const { counter, color } = state;
    // console.log(counter);
    // console.log(state.color);

    const handleDecrement = () => {
        setState((prevState) => {
            // spread operator
            return { ...prevState, counter: prevState.counter - 1 };
        });
    }
    const handleIncrement = () => {
        setState((prevState) => {
            return { ...prevState, counter: prevState.counter + 1 };
        });
    };

    // 1. najprostiji useEffect i poziva se svaki put kada se nesto desi sa nasom komponentom;
    // useEffect(() => {
    //     console.log("Render");
    // });

    //  2. isto je kao i componentDidMount
    // kada kao drugi parametar prima prazan niz, ovo se okida u trunutku kada je nasa komponenta upisana u DOM
    // useEffect(() => {
    //     console.log("Render");
    // }, []);

    // 3. kada zelimo da postavimo neki uslov kada zelimo da se useEffect okine
    // pr1 ako se nesto desi sa color
    useEffect(() => {
        console.log("render");
    }, [state.color]);

    //pr2
    // useEffect(() => {
    //     if (state.counter === 10) alert("Stiglo je do 10")
    // }, [state.counter]);

    // componentWillUnmount
    useEffect(() => {
        console.log("Hello World");
        return () => {
            console.log("Do some cleanup");
        }
    }, []);

    return (
        <>
            <button onClick={handleDecrement}>-</button>
            <span>{counter}</span>
            <span>{color}</span>
            <button onClick={handleIncrement}>+</button>
            <button
                onClick={() => {
                    setState((prevState) => {
                        return { ...prevState, color: "red" }
                    });
                }
                }
            >Change Color</button>
        </>);
};

export default Counter1;
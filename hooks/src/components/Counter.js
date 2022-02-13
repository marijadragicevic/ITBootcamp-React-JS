import React, { useState } from "react";
// svaki hook mora da se uveze

const initialFunction = () => {
    console.log("run function");
    return 4;
};

const Counter = () => {
    // inicijalne vrednosti u useState moze da budu i string,niz,funkcija,...
    // const [counter, setCounter] = useState(initialFunction());
    const [counter, setCounter] = useState(4);

    const handleDecrement = () => {
        setCounter((prevState) => prevState - 1);
    }

    return (
        <>
            <button onClick={handleDecrement}>-</button>
            <span>{counter}</span>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </>);
};

export default Counter;
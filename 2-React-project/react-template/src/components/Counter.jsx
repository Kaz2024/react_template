import React from "react";
import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const decrementCounter = () => {
    setCount(count - 1);
    };

    return (
    <div>
        <h1>{count}</h1>
        <button onClick={decrementCounter}>Decrement the counter</button>
    </div>
    );
}

export default Counter;
import React from "react";
import { useState } from "react";

const CountDisplay = (props) => {
    return <h1>{props.count}</h1>;
};
const CountButton = (props) => {
    const incrementCounter = () => {
    props.setCount(props.count + 1);
    };
    return (
        <button onClick={incrementCounter}>Increment the counter</button>
    );
};
const CountButton2 = (props) => {
    const decrementCounter = () => {
    props.setCount(props.count - 1);
    };
    return (
    <div>
        <button onClick={decrementCounter}>Decrement the counter</button>
    </div>
    );
};
const CounterImproved = () => {
    const [count, setCount] = useState(0);
return (
    <div>
    <CountDisplay count={count} />
    <CountButton setCount={setCount} count={count} />
    <CountButton2 setCount={setCount} count={count} />
    </div>
);
};
export default CounterImproved;
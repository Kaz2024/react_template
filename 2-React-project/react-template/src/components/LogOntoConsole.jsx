import React from "react";

const LogOntoConsole = () => {
    const ConsoleChange = (event) => {
    console.log(event.target.value)};
return (
    <input type="text" onChange={ConsoleChange}></input>
)
};
export default LogOntoConsole;
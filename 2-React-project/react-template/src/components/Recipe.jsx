import React from "react";

const Recipe = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.type} </h2>
            <p>{props.duration}</p>
        </div>
    )
}

export default Recipe;

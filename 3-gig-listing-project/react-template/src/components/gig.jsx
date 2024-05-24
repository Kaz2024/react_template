import React from "react";
import albumSign from "../assets/sign.png";
import "./gig.css";
import { useState } from 'react';


// const Gig = (props) => {
//     return (
//         <div id="gig">
//             <h3 id="name"> {props.name}  </h3>
//             <p id="location">{props.location}</p>
//             <p id="date">{props.date}</p>
//             {/* <img className="logo" src={albumSign}></img> */}
//             <p id="about">About </p>
//             <p id="info"> {props.info}</p>
//         </div>

//     );
// };

//     const [isFavourited, setIsFavourited] = useState(false);

//     const handleFavouriteClick = () => {
//       setIsFavourited(!isFavourited); // Toggle the favourite status
//     };

//     return (
//     <div>
//         <h3>{gig.name}</h3>
//         <p>{gig.description}</p>
//         <button onClick={handleFavouriteClick}>
//         {isFavourited ? '♥ Unfavourite' : '♡ Favourite'}
//         </button>
//     </div>
//     );



// A single, unified Gig component that includes the favourite functionality
function Gig (props) {
    const [isFavourited, setIsFavourited] = useState(false);

    const handleFavouriteClick = () => {
    setIsFavourited(!isFavourited); // Toggle the favourite status
    };

    return (
    <div>
        <h3 id="name">{props.name}</h3>
        <p id="location">{props.location}</p>
        <p id="date">{props.date}</p>
        {/* <img src={props.image} alt="Gig image" className="logo" /> */}
        <img src={props.image} />
        <p id="about">About</p>
        <p id="info"> {props.info}</p>
        <button onClick={handleFavouriteClick} id="button">
        {isFavourited ? '♥ Unfavourite' : '♡ Favourite'}
        </button>
    </div>
    );
};

export default Gig;
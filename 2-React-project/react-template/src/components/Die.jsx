import React, { useState } from 'react';

function Die() {
    const [roll, setRoll] = useState(1); // Initialize with 1 or any number between 1 and 6

    const rollDie = () => {
        const newRoll = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
        setRoll(newRoll); // Update the state with the new roll
    };
    return (
        <div>
            <h1>Roll: {roll}</h1>  {/* Display the current roll */}
            <button onClick={rollDie}>Roll Die</button>  {/* Button to trigger a new roll */}
        </div>
    );
};

export default Die;
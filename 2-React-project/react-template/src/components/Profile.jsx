import React from "react";

const Profile = (props) => {
    return (
        <div id="profile">
            <h1 id="name"> Quackie {props.name}</h1>
            <p id="job">Makers' favourite {props.job}</p>
            <p id="birthdate">{props.birthdate}</p>
        </div>

    );
};
export default Profile;

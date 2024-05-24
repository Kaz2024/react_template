import React from "react";
import { useState } from "react";


const Form = () => {
    const [username, setUsername] = useState(""); //initial state is an empty string
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const handleUserNameChange = (event) => {
        setUsername(event.target.value)
    };
    // const handlePasswordChange = (event) => {
    //     setPassword(event.target.value)
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://url.com/endpoint", {
            method: "POST",
            body: JSON.stringify({ username: username } , {password: password}),
        });
    };
    return (
        <form onSubmit ={handleSubmit}>
            <label>
                Enter your username:
                <input
                type="text"
                name="username"
                value={username}
                onChange={handleUserNameChange} />
            </label>
            <br />
            <label>
            Enter your password:
                <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </label>
            <label htmlFor="check">Show Password</label>
            <input
            id="check"
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword((prev) => !prev)}/>
            <label>
                Submit
                <input type="submit" name="submit" />
            </label>
        </form>
    );
};
export default Form;

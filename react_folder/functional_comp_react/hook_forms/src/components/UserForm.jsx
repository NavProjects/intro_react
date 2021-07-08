import React, { useState } from 'react';


const UserForm = props => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = e => {
        e.preventDefault();
        const newUser = { username, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    return (
        <form onSubmit={createUser}>
            <div>
                <label>Username: </label>
                <input type="text" onChange={(e) => setUsername(e.target.value)} value={ username }/>
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} value={ email } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={(e) => setPassword(e.target.value)} value={ password } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} value={ confirmPassword } />
            </div>
            <input type="submit" value="Reset User" />
            <div>
                <p> Username:{ username } </p>
            </div>
            <div>
                <p> Email:{ email } </p>
            </div>
            <div>
                <p> Password:{ password } </p>
            </div>
            <div>
                <p> Confirm Password:{ confirmPassword } </p>
            </div>
        </form>
    );
};

export default UserForm;

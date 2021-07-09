import React, { useState } from 'react';

const UserForm = props => {
    const [firstName, setFName] = useState("");
    const [lastName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPass] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [LastNameError, setLastNameError] = useState("");
    const [emailError, setEmailNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassError, setConfirmPassError] = useState("");

    const createUser = e => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setFName("");
        setLName("");
        setEmail("");
        setPassword("");
        setConfirmPass("");
    };

    const handleFname = (e) => {
        setFName(e.target.value);
        if (e.target.value.length < 2 && e.target.value.length > 0) {
            setFirstNameError("First Name must be at least 2 Characters");
        }
        else {
            setFirstNameError("")
        }
    }
    const handleLname = (e) => {
        setLName(e.target.value);
        if (e.target.value.length < 2 && e.target.value.length > 0) {
            setLastNameError("Last Name must be at least 2 Characters");
        }
        else {
            setLastNameError("")
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5 && e.target.value.length > 0) {
            setEmailNameError("Email must be at least 5 Characters");
        }
        else {
            setEmailNameError("")
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8 && e.target.value.length > 0) {
            setPasswordError("Password must be at least 8 Characters");
        }
        else {
            setPasswordError("")
        }
    }
    const handleCPassword = (e) => {
        setConfirmPass(e.target.value);
        if (e.target.value.length < 8 && e.target.value.length > 0) {
            setConfirmPassError("Password must be at least 8 Characters");
        }
        else if (e.target.value != password && e.target.value.length > 0) {
            setConfirmPassError("Passwords must match")
        }
        else {
            setConfirmPassError("")
        }
    }


    return (
        <form onSubmit={createUser}>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={(e) => setFName(e.target.value), handleFname} value={firstName} />
                {
                    firstNameError ?
                        <p style={{ color: "red" }}>{firstNameError}</p> :
                        ''
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={(e) => setLName(e.target.value), handleLname} value={lastName} />
                {
                    LastNameError ?
                        <p style={{ color: "red" }}>{LastNameError}</p> :
                        ''
                }
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value), handleEmail} value={email} />
                {
                    emailError ?
                        <p style={{ color: "red" }}>{emailError}</p> :
                        ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={(e) => setPassword(e.target.value), handlePassword} value={password} />
                {
                    passwordError ?
                        <p style={{ color: "red" }}>{passwordError}</p> :
                        ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={(e) => setConfirmPass(e.target.value), handleCPassword} value={confirmPassword} />
                {
                    confirmPassError ?
                        <p style={{ color: "red" }}>{confirmPassError}</p> :
                        ''
                }
            </div>
            <input type="submit" value="Reset User" />
        </form>
    );
};


export default UserForm;

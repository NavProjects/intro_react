import React, { useState } from "react";

const Form = props => {
    const [formstate, setFormState] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [validState, setValidState] = useState({
        email: false,
        password: false,
        confirmPassword: false
    })

    const handleChange = event => {
        const { name, value } = event.target
        setFormState({
            ...formstate,
            [name]: value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        if((formstate.email.length > 0) && ! (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(formstate.email)){
        var  email = true
        }
        if(formstate.password.length < 8){
            var password = true
        }

        if (formstate.password != formstate.confirmPassword){
            var confirmPassword = true
        }

        setValidState({
            ... validState,
            email,
            password,
            confirmPassword
        })
    }



    return(
        <div>
            <form onSubmit={handleSubmit}>
                <p>
                    Email:
                    <input type="text" name="email" onChange={handleChange} id="" />
                    { (validState.email) ? <p>Your email must be a valid pattern</p> : null}
                </p>
                <p>
                    Password:
                    <input type="text" name="password" id="" onChange={handleChange} />
                    { (validState.password) ? <p>Your password must be longer than 8 characters</p> : null}
                </p>
                <p>
                    Confirm Password:
                    <input type="text" name="confirmPassword" id="" onChange={handleChange} />
                    { (validState.confirmPassword) ? <p>Pass words dont match</p> : null}
                </p>
                <button type="submit">Login</button>
            </form>
            <div>
                <p>{formstate.email}</p>
                <p>{formstate.password}</p>
            </div>
        </div>
    )
}
export default Form;
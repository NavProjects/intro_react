import React, { useState } from 'react'
import UserForm from './UserForm'

const Results = props => {

    return (
        <div>
            <div>
                <p> Username:{ props.username } </p>
            </div>
            <div>
                <p> Email:{ props.email } </p>
            </div>
            <div>
                <p> Password:{ props.password } </p>
            </div>
            <div>
                <p> Confirm Password:{ props.confirmPassword } </p>
            </div>
        </div>
    )
}

export default Results
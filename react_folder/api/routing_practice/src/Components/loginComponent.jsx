import React from 'react';


const LoginComponent = props => {

    const {word, color1, color2} = props
    console.log(color1)

    const middle = {
        textAlign: 'center',
        color: color1,
        background: color2
    }

    return(
        <div style={ middle }>
            the word is { word }
        </div>
    )
}

export default LoginComponent
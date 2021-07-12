import React from 'react';


const ShowBox = (props) => {

    const {info} = props
    console.log(info)

    const box = {
        background: `${info.color}`,
        height:`${info.height}px`,
        width:`${info.width}px`,
    };

    return (
        <>
            <h1 style={ box }></h1>
        </>
    );
}

export default ShowBox

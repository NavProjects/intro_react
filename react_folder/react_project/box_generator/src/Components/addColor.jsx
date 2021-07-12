import React, { useState } from 'react';


const AddColor = (props) => {


    const {setBoxes, boxes} = props


    const [info, setForminfo] = useState({
        color:'',
        height:'',
        width:''
    });


    const handleChange = e =>{
        const {name,value} = e.target
        setForminfo({
            ...info,
            [name]: value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setBoxes([...boxes, info]);
        setForminfo({
            color:"",
            height:"",
            width:""
        })
    };


    return (
        <form onSubmit={handleSubmit}>
            <label>Color:</label>
            <input type="text" name="color" onChange={handleChange} value={info.color}/>
            <label>Height:</label>
            <input type="text" name="height" onChange={handleChange} value={info.height}/>
            <label>Width:</label>
            <input type="text" name="width" onChange={handleChange} value={info.width}/>
            <input type="submit" value="Add" />
        </form>
    );
}

export default AddColor
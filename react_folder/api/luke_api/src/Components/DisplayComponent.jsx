import React, { useEffect, useState } from 'react';
import axios from 'axios';
import obi_err from './resources/obi_err.jpg'

const DisplayComponent = props => {

    const { info, id } = props
    console.log(info)


    const [pepPlan, setPepPlan] = useState("")
    const [error, setError] = useState(false)


    useEffect(() => {
        axios.get(`https://swapi.dev/api/${info}/${id}`)
            .then(response => {setPepPlan(response.data)})
            .catch(err => {console.log(err)
            setError(true)})
    }, [info, id]);

    if (error){
        return(
            <div>
                <h1>These arent the droids you're looking for</h1>
                <img style={{ width: '400px' }}src={obi_err} alt="picture of obi wan kenobi" />
            </div>
        )
    }
    else if (info == 'people'){
    return (
        <div>
            Name: {pepPlan.name}
            <br />
            Gender: {pepPlan.gender}
            <br />
            Eye color: {pepPlan.eye_color}
            <br />
            Birth Year: {pepPlan.birth_year}
        </div>
    )}
    else if (info == 'planets'){
        return(
            <div>
            Name: {pepPlan.name}
            <br />
            Climate: {pepPlan.climate}
            <br />
            Diameter: {pepPlan.diameter}
            <br />
            Population: {pepPlan.population}
        </div>
        )}
}

export default DisplayComponent
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pokemon = props => {

    const [pokemon, setPokemon] = useState(null);
    const [click, setClick] = useState(true);


    const handleClick = e => {
        if (click === true) {
            setClick(false)
        }
        else {
            setClick(true)
        }
    }

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=200')
            .then(response => { setPokemon(response.data.results)
            console.log(response.data.results)})
            .catch(err => console.log(err))
    }, []);

    return (
        <div>
            {
                (click === false)
                    ?
                    <div>
                        <button onClick={handleClick} >Fetch Pokemon</button>
                        <div>
                                {pokemon.length > 0 && pokemon.map((pokemon, index) => {
                                    return (<div key={index}>{index+1}. {pokemon.name}</div>)
                                })}
                        </div>
                    </div>
                    :
                    <button onClick={handleClick} >Fetch Pokemon</button>
            }
        </div>
    );
}

export default Pokemon
import React, { useEffect, useState } from "react";

const Example = (props) => {
    const [pokemon, setPokemon] = useState([]);
    const [click, setClick] = useState(true);


    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=200')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }, []);


    const handleClick = e => {
        if (click == true) {
            setClick(false)
        }
        else {
            setClick(true)
        }
    }



    return (
        <div>
            {
                (click == false)
                    ?
                    <div>
                        <button onClick={handleClick} >Fetch Pokemon</button>
                        <div>
                                {pokemon.length > 0 && pokemon.map((pokemon, index) => {
                                    return (<div key={index}>{pokemon.name}</div>)
                                })}
                        </div>
                    </div>
                    :
                    <button onClick={handleClick} >Fetch Pokemon</button>
            }
        </div>
    );
}


export default Example;
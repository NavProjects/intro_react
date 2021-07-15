import React, {useState} from "react";
import { navigate } from "@reach/router";

const SearchComponent = props => {


    const handleSubmit = e => {
        e.preventDefault();
        navigate(`/${e.target.pick.value}/${e.target.number.value}`)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="pick">Search For:</label>
                <select name="pick" id="pick" >
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                </select>
                <label htmlFor="number">ID:</label>
                <input name="number" type="number"  />
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}

export default SearchComponent
import React, {useState} from "react";

const ListItems = props => {

    const { setLists, lists } = props

    const [listItem, setListInfo] = useState({
        todo:"",
        completed: false
    })



    const handleChange = e => {
        const {name,value} = e.target
        setListInfo({
            ...listItem,
            [name]: value,
            completed: false
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setLists([...lists,listItem]);
        setListInfo({
            todo:"",
            completed:false
        });
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="todo" onChange={handleChange} value={listItem.todo} />
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default ListItems
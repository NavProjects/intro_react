import React from "react";
import styles from "./DisplayComponent.module.css"

const TodoDisplay = props => {


    const { idx, todo, remove, checked, lists, setLists } = props
    const classLine = styles.line
    const classEmpt = styles.nothing



    const onChange = (e, idx) => {
        lists[idx].completed = !lists[idx].completed;
        setLists([...lists])
    }

    const slashed = (e, idx) => {
        if (lists[idx].completed === true) {
            console.log(styles.line)
            console.log(lists[idx].completed)
            return styles.line
        }
        else {
            return styles.nothing
        }
    }


    return (
        <div>
            {
            (lists[idx].completed)
            ?
            <div className={styles.flex}>
                <input id={idx} name="" onChange={(e) => onChange(e, idx)} checked={checked} type="checkbox" />
                <p className={classLine} id={idx}>{todo}</p>
                <button onClick={e => remove(idx)} id={idx} >Delete</button>
            </div>
            :
            <div className={styles.flex}>
                <input id={idx} name="" onChange={(e) => onChange(e, idx)} checked={checked} type="checkbox" />
                <p className={classEmpt} id={idx}>{todo}</p>
                <button onClick={e => remove(idx)} id={idx} >Delete</button>
            </div>
            }
        </div>
    )
}



export default TodoDisplay
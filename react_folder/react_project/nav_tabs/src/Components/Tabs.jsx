import React, { useState } from 'react';
import styles from './Tabs.module.css'

const Tabs = props => {

    const [contState, setContState] = useState(0)
    const [clickB, setClickB] = useState("")
    const { tabs } = props
    const classN = styles.btn
    const classE = ""



    const handleClick = (index) => {
        setContState(index)
        setClickB(classN)
    }

    return (
        <div>
            {
                tabs.map((tab, i) => {
                    if (i == contState) {
                        return (<button
                            className={clickB}
                            onClick={() => handleClick(i)}
                            key={i}>{tab.title}</button>)
                    }
                    else return (
                        <button
                            className={classE}
                            onClick={() => handleClick(i)}
                            key={i}>{tab.title}</button>
                    )
            })
            }
            <div>
                <h1>{tabs[contState].content}</h1>
            </div>
        </div>
    );
}


export default Tabs
import React from 'react';
import { Link } from '@reach/router';


const DashboardComponent = props => {

    const { id } = props



    const middle = {
        textAlign: 'center'
    }

    return (
        <div>
        {
            (isNaN(id)==false)
            ?
            <div style={middle}>
            The number is: {id}
            </div>
            :
            <div style={middle}>
            The word is: {id}
            </div>
        }
        </div>
    )
}

export default DashboardComponent
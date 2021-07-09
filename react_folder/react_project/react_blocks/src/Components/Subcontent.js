import React, { Component } from 'react';
import styles from './Subcontent.module.css';

class Subcontent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <span className={ styles.sub }></span>
        );
    }
}

export default Subcontent
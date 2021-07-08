import React, { Component } from 'react';
import styles from './Subcontent.module.css';

class Subcontent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    }
    render() {
        return (
            <span className={ styles.sub }></span>
        );
    }
}

export default Subcontent
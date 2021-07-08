import React, { Component } from 'react';
import styles from './Advertisement.module.css';

class Advertisement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    }
    render() {
        return (
            <div className={ styles.adv }></div>
        );
    }
}

export default Advertisement
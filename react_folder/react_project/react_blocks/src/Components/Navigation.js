import React, { Component } from 'react';
import styles from './Navigation.module.css';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    }
    render() {
        return (
            <div className={ styles.nav }></div>
        );
    }
}

export default Navigation
import React, { Component } from 'react';
import styles from './Header.module.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    }
    render() {
        return (
            <div className={ styles.head }></div>
        );
    }
}

export default Header
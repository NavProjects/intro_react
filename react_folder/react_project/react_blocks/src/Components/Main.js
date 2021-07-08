import React, { Component } from 'react';
import styles from './Main.module.css';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    }
    render() {
        return (
            <div className={ styles.main }>{ this.props.children }</div>
        );
    }
}

export default Main
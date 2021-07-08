import React, { Component } from 'react';
import styles from './MyNewComponent.module.css';

class MyNewComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    }
    ageUp = () => {
        let age1 = this.state.age + 1
        this.setState({ age: age1 });
    }
    render() {
        return (
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p> Age:{this.state.age} </p>
                <p> Hair Color:{this.props.hairColor} </p>
                <button className={ styles.btn } onClick={this.ageUp}>Birthday button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        );
    }
}

export default MyNewComponent
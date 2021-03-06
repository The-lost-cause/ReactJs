/** Creating a Functional Component Here: Using ES6 --> Arrow Functions */

import React, { Component } from 'react';
import classes from './Person.module.css'


class Person extends Component {
    render() {
        console.log('[Person.js] Child Component Rendering..');
        return (
            <div className={classes.Person} >
                <p onClick={this.props.click}>I'm {this.props.name} and {this.props.age} years old</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}></input>
            </div>
        )
    }

};

export default Person;


/** Creating a Functional Component Here: Using ES6 --> Arrow Functions */

import React from 'react';
import classes from './Person.module.css'


const person = (props) => {

    return (
        <div className={classes.Person} >
            <p onClick={props.click}>I'm {props.name} and {props.age} years old</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
};

export default person;


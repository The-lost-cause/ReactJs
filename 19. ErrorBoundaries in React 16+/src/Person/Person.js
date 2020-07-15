
import React from 'react';

// For CSS Modules Implementation 

import colors from './Person.css';

const person = (props) => {

    // Generating an Error

    const rnd = Math.random();

    if (rnd > 0.7) {
        throw new Error('ERROR !');
    }

    return (
        
       <div className={colors.Person}>

            <p onClick={props.click}>My name is {props.name} and I'm {props.age} years old, {props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}/>
        
        </div>
    )
}


export default person;
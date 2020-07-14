// This is a Person Component: Functional Component

// In simplest form Component in React is just a Function

// ES6 Best Practice for creating Function i.e Arrow Functions : Advantage with this keyword !

// (props) is an object with all the attributes passed in the HTML Code

// (props.children) : children(reserved word) a interal property for displaying CONTETNT inside a Tag

import React from 'react';

const person = (props) => {

    return (
        
        <div>
            <p>My name is {props.name} and I'm {props.age} years old, {props.children}</p>
        </div>

    )
}




export default person;
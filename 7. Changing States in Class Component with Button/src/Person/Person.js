
import React from 'react';

const person = (props) => {

    return (
        
        <div>
            <p>My name is {props.name} and I'm {props.age} years old, {props.children}</p>
        </div>

    )
}




export default person;
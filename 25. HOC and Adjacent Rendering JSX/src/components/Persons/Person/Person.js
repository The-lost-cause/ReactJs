/** Creating a Functional Component Here: Using ES6 --> Arrow Functions */

import React, { Component } from 'react';
import Aux from '../../../hoc/Aux'; 


class Person extends Component {
    render() {
        console.log('[Person.js] Child Component Rendering..');
        return (
            <Aux>
                <h1>Learning How adjacent Element can be rendered</h1>
                <p onClick={this.props.click}>I'm {this.props.name} and {this.props.age} years old</p>
                <input type="text" 
                  onChange={this.props.changed} 
                  value={this.props.name}></input>
            </Aux>
                
        )
    }

};

export default Person;


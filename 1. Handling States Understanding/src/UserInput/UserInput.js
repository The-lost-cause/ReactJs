import React, { Component } from 'react';
import  './UserInput.css';

// Class Based Component 

class UserInput extends Component {
    render() {
        return (
            <div className = 'Input'>
                <p>Paragraph from UserInput</p>
                <p>I'm {this.props.name}</p>
                <input type = 'text' onChange = {this.props.change}  value = {this.props.name}/>
            </div>
        )
    }
}


export default UserInput;
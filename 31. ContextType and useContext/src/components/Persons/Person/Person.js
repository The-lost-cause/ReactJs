
import React, { Component } from 'react';
import Aux from '../../../hoc/Aux'; 
import withClass from '../../../hoc/withClass';
import classes from './Person.module.css';
import PropTypes from 'prop-types';
import AuthContext from '../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidMount() {
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    // Elegant way of using ContextApi 
    static contextType = AuthContext;

    render() {
        console.log('[Person.js] Child Component Rendering..');
        return (
            <Aux>
                {this.context.authenticated ? <p>Authenticated</p> : <p>Please Log In</p>} 
                <p key='2' onClick={this.props.click}>I'm {this.props.name} and {this.props.age} years old</p>
                <input
                 // ref={(inputEl)=> {this.inputElement = inputEl}}
                  ref={this.inputElementRef}
                  key='1' 
                  type="text" 
                  onChange={this.props.changed} 
                  value={this.props.name}>
                </input>
            </Aux>     
        )
    }
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);


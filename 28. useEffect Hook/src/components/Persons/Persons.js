import React, { Component } from 'react';
import Person from './Person/Person'

class Persons extends Component {
    state = {};
    static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] getDerivedStateFromProps called....');
        return state;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate called..');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getsSnapshotBeforeUpdate called...');
        return { message: 'Snapshot'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate called....');
        console.log(snapshot);
    }

    // Cleaning Up WORK
    componentWillUnmount() {
        console.log('[Persons.js] componentwillUnmount renderin...: Clean up Task')
    }


    render() {
        console.log('[Persons.js] Child Component Rendering..')
        return this.props.persons.map((person, index) => {
            return <Person
                key={person.id}
                click={() => this.props.clicked(index)}
                name={person.name} 
                age={person.age}
                changed={(event) => this.props.changed(event, person.id)} /> 
            });
     } 
   
}


  export default Persons;

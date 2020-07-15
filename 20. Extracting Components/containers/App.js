import React, { Component } from 'react';
import colors from '../containers/App.css';
import Persons from '../components/Persons/Persons';
import CockPit from '../Cockpit/Cockpit';


class App extends Component {
  
// Defining States in a Class Component with property:(state):Holds an Object

  state = { 

    person: [
      { name: 'Abu',    age: 26, id: 'A' },
      { name: 'Aman',   age: 26, id: 'B' },
      { name: 'Leenu',  age: 26, id: 'C' },
      { name: 'Kanika', age: 30, id: 'D' },
    ],

    otherState: 'Some other Value',
    showPersons: false,

  }
  
  // HandlerEvent: Changing States here (onClick Method)

   deletePersonHandler = (index) => {

  // Always create a copy of an Array before Manipulating it !, Hence

  // Method:1 const persons = this.state.persons.slice(), Method:2 Array Deconstruct

    const persons = [...this.state.person];
    persons.splice(index, 1);
    this.setState({
      person: persons,
    });

  }

  // New Method for onChange Event 
  
  nameChangedHandler = (event, id) => {  // Getting an Event Object

    const personIndex = this.state.person.findIndex(value => {

      return value.id === id;

    })
  
    // Taking out the object that satisfied the above condition

    const person = {...this.state.person[personIndex]}

    // Overriding the Object with new name that has been typed

    person.name = event.target.value;

    const persons = [...this.state.person];
    persons[personIndex] = person;

    this.setState({
      person: persons       
    })
  
  }

  // New Handler for Conditional Operator set for Button

  togglePersonHandler = () => {

    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    }) 

  }
   
  render () {

    let persons = null;

    if (this.state.showPersons) {

      persons = <Persons 
                  person={this.state.person} 
                  clicked={this.deletePersonHandler}
                  changed={this.nameChangedHandler}
                />
    }

    return (
      <div className={colors.App}>

        <CockPit
          showPersons={this.state.showPersons}
          person={this.state.person}
          clicked={this.togglePersonHandler}
        /> 
        {persons}

      </div>
    );
  }
}

export default App;
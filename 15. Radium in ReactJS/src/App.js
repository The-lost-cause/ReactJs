import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';  

// Importing Radium first for Styling

import Radium, { StyleRoot }from 'radium';

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

  render() {

    // Method:2 Inline Styling for Button

    let style = {
      
      border:          '3px solid blue',
      backgroundColor: 'lightgreen',
      fontWeight:      'bold',
      padding:         '8px',
      cursor:          'pointer',
      
      // Adding hover style with the help of radium package

      ':hover':       { backgroundColor: 'lightyellow',
                       color:             'black'   }          
    
    }

    // Elegant way for Rendering Content Based on Condition
    // Storing the Component in a ELEMNET Variable

    let persons = null;

    if (this.state.showPersons) {

      persons = (
        
        // Elegant way for Outputting list Dynamically : Key property is MUST!

        <div>
            { this.state.person.map((value, index) => {

                return <Person 
                      key={index}
                      click={() => this.deletePersonHandler(index)}
                      changed={this.nameChangedHandler.bind(this, value.id)}
                      name={value.name} 
                      age={value.age} />
            })}
        </div> 

      );

      // Changing Styles when The users are visibe

      style.backgroundColor = 'lightblue';
      style[':hover']       =  { backgroundColor: 'salmon', color: 'red'}
    
    }

    // For Dynamically Addition of Classes

    let classes = [];

    // Dynamic Nature Implementation

    if (this.state.person.length <= 2) {
      classes.push('red');          // classes = ['red]
    }

    if (this.state.person.length <=1) {
      classes.push('bold');        // classes = ['red', 'bold']
    }


    return (
      <StyleRoot>
        <div className="App">
        <h1>Learning React: It's All About Components</h1>
        <p className={classes.join(' ')}> I will become Billinoaire Someday</p>
        <button 
        style={style}
        onClick={this.togglePersonHandler}>Show Persons</button>
        {/** Element Variable == Holding Component */}
        {persons}
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
import React, { Component } from 'react';

// For Css Modules  Now 

import colors from './App.css';
import Person from './Person/Person';  



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


    // Elegant way for Rendering Content Based on Condition
    // Storing the Component in a ELEMNET Variable

    let persons = null;

    // Css Modules Implementation here

    let btnClass = [colors.Button];

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
    
      btnClass.push(colors.Red)


    }

    // For Dynamically Addition of Classes

    let classes = [];

    // Dynamic Nature Implementation

    if (this.state.person.length <= 2) {
      classes.push(colors.red);                 // classes = ['red]
    }

    if (this.state.person.length <=1) {
      classes.push(colors.bold);               // classes = ['red', 'bold']
    }


    return (
      <div className={colors.App}>
        <h1>Learning React: It's All About Components</h1>
        <p className={classes.join(' ')}> I will become Billinoaire Someday</p>

        <button className={btnClass.join(' ')}
        onClick={this.togglePersonHandler}>Show Persons</button>
        {/** Element Variable == Holding Component */}
        {persons}
      </div>
    );
  }
}

export default App;
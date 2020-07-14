import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';  

class App extends Component {
  
// Defining States in a Class Component with property:(state):Holds an Object

  state = { 

    person: [
      { name: 'Abu',    age: 26 },
      { name: 'Aman',   age: 26 },
      { name: 'Leenu',  age: 26 },
      { name: 'Kanika', age: 30 },
    ],

    otherState: 'Some other Value',
    showPersons: false,

  }
  
  // HandlerEvent: Changing States here (onClick Method)

  switchNameHandler = (newName) => {

    // It will merge with the Existing Data

    this.setState({

      person:[
        { name: 'The Abu',    age: 25 },
        { name: 'The Aman',   age: 25 },
        { name:  newName,     age: 25 },
        { name: 'The Kanika', age: 28 },
      ]

    })

  }

  // New Method for onChange Event 
  
  nameChangedHandler = (event) => {  // Getting an Event Object

    this.setState({

      person:[
        { name: 'The Abu',           age: 25 },
        { name: 'The Aman',          age: 25 },
        { name:  event.target.value, age: 25 },
        { name: 'The Kanika',        age: 28 },
      ]

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
      cursor:          'pointer'
    
    }

    return (
      <div className="App">
       <h1>Learning React: It's All About Components</h1>
       <p>I will become Billinoaire Someday</p>

       <button 
       style={style}
       onClick={this.togglePersonHandler}>Show Persons</button>

        {/** Conditional Rendering Here using Terinary Operator */}

        { this.state.showPersons ? 
          <div>
            <Person name={this.state.person[0].name}  age={this.state.person[0].age} />
            <Person name={this.state.person[1].name}  age={this.state.person[1].age} />
            <Person 
            name={this.state.person[2].name} 
            age={this.state.person[2].age} 
            click={this.switchNameHandler.bind(this, 'Samantha')}
            changed={this.nameChangedHandler}> My Hobbies : Writing Blog </Person>
            <Person name={this.state.person[3].name}  age={this.state.person[3].age} />
          </div> : null
        }

       
      </div>
    );
  }
}

export default App;
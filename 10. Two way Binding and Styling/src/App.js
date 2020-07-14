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

  }

  
  // HandlerEvent: Changing States here 

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

  render() {

    return (
      <div className="App">
       <h1>Learning React: It's All About Components</h1>
       <p>I will become Billinoaire Someday</p>

       {/** Two methods for Binding this while passing METHOD:1 as a Prop */}

       <button onClick={() => this.switchNameHandler('Rockstar')}>Switch Names</button>

       <Person name={this.state.person[0].name}  age={this.state.person[0].age} />
       <Person name={this.state.person[1].name}  age={this.state.person[1].age} />

       {/** Passing METHOD:2 as props here  */}
       <Person name={this.state.person[2].name}  age={this.state.person[2].age} click={this.switchNameHandler.bind(this, 'Samantha')}> My Hobbies : Writing Blog </Person>
       <Person name={this.state.person[3].name}  age={this.state.person[3].age} />
      </div>
    );

  
  }
}

export default App;
import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';



class App extends Component {

  // Adding States to the App 

  state = {

    name: 'Abu',
    age :  25,
    
  }

  // Handlers for Changing the state

  stateChangeHandler = (event) => {

    this.setState({
      
      name: event.target.value,
      age: 24,

    })

  }


  render() {

    // Adding inline Styles for UserInput Component

    const style = {

      border:  '1px solid blue',
      color:   'red',
      padding: '10px',
      margin:  '10px',

    };

    return (
      <div className="App">
        <h1>Karan</h1>
        <UserInput  name = {this.state.name} change = {this.stateChangeHandler} />
        <UserOutput name = {this.state.name} style = {style} />
      </div>
    );
  }
}

export default App;

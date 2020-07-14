import React, { Component } from 'react';
import './App.css';
// Should start with Capital-Letter
import Person from './Person/Person';  

class App extends Component {
  
  render() {

    return (
      <div className="App">
       <h1>Learning React: It's All About Components</h1>
       <p>I will become Billinoaire Someday</p>
       <Person />
      </div>
    );

  
  }
}

export default App;

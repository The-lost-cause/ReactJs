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
       <Person name='Karan' age='25'/>
       <Person name='Bong'  age='20'/>
       <Person name='Dang'  age='25' > My Hobbies : Writing Blog </Person>
       <Person name='Kanu'  age='29'/>
      </div>
    );

  
  }
}

export default App;

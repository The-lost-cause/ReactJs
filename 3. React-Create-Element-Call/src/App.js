import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  render() {

    /*return (
      <div className="App">
       <h1>Learning React</h1>
      </div>
    );*/

    return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Learning React'))
  
  }
}

export default App;

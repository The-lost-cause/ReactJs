import React, { Component } from 'react';
import Person from './Person/Person';
import classes from './App.module.css';
import ErrorBoundary from './ErrorBoundary /ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      { name: 'Karan', age: 28, id: 'k' },
      { name: 'Leenu', age: 28, id: 'l' },
      { name: 'Bong',  age: 19, id: 'b' } 
    ],

    otherState: 'Some other Value',
    showPersons: false
  } 


  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {
    let btnClass = '';
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age}
                changed={(event) => this.nameChangeHandler(event, person.id)} /> 
            </ErrorBoundary>
          })}
        </div>
      )
      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <=1) {
      assignedClasses.push(classes.bold)
    }

    return (
      <div className={classes.App}>
        <h1 className={assignedClasses.join(' ')}>I'm Karan Negi</h1>
        <button className={btnClass}
        onClick={this.togglePersonHandler}>Toggle</button>
        {persons}
      </div>
    );
  }
}

export default App;

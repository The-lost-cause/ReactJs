import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import classes from '../containers/App.module.css';
import Cockpit from '../components/Cockpit/Cockpit';

/**
 *  Life-Cycle Hooks in a Class Based Components and their ORDER
 *  1. CONSTRUCTOR.
 *  2. getDerivedStateFromProps(props, state).
 *  3. Render Method gets Execute.
 *  4. Child Component Inside Render method will run.
 *  5. componentDidMount 
 *  NOTE: ComponentWillMount is deprecated.
 */

class App extends Component {

  constructor(props) {  // First thing that gets called

    super(props);

      console.log('I\'m a [App.js] CONSTRUCTOR');

      this.state = {
          persons: [
            { name: 'Karan', age: 28, id: 'k' },
            { name: 'Leenu', age: 28, id: 'l' },
            { name: 'Bong',  age: 19, id: 'b' } 
          ],
          otherState: 'Some other Value',
          showPersons: false,
          showCockpit: true
      }
  }

  // Second thing that gets Called: Should Return an Updated State
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps');
    console.log(props)
    return state;
  }

  // Last thing that will run
  componentDidMount() {
    console.log('[App.js componentDidMount running]')
  }

  /**  Deprecated Hook
     componentWillMount() {
    console.log('[App.js] Component will Mount')
  } */

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate rendering... ');
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

    // Third thing that gets Called
    console.log('[App.js] Render Method');

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangeHandler}          
                /> 
    }

    return (
      <div className={classes.App}>

        <button onClick={() => {
          this.setState({ showCockpit: false});
          }}>Remove Cockpit
        </button>

        { this.state.showCockpit ? <Cockpit 
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonHandler}
          author={this.props.appAuthor}
        /> : null }
        {persons}
      </div>
    );
  }
}

export default App;

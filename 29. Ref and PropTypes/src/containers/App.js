import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import classes from '../containers/App.module.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends Component {

  constructor(props) {  

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
          showCockpit: true,
          changeCounter: 0
      }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps');
    console.log(props)
    return state;
  }

  componentDidMount() {
    console.log('[App.js componentDidMount running]')
  }

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

    // Optional way of using setState here

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter +1
      }
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {

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
      <Aux>
        <button onClick={() => {
          this.setState({ showCockpit: false});
          }}>Remove Cockpit
        </button>

        { this.state.showCockpit ? 
         <Cockpit 
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonHandler}
          author={this.props.appAuthor}
         /> : null }
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);

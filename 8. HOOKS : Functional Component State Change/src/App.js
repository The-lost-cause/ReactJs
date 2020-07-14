// Hook : useState for Functional Component

import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';  

// States in Functional Component 

// useState Method returns an exactly two values : 1. Original State, 2. Function that Modifies the State

const App = (props) => {

  const [personsState, setPersonsState ] = useState({ 

    person: [
      { name: 'Abu',    age: 26 },
      { name: 'Aman',   age: 26 },
      { name: 'Leenu',  age: 26 },
      { name: 'Kanika', age: 30 },
    ],

    otherState: 'Some other Value',

  });

  // No setState Method Unlinke in Class Based Component
  // Difference : HOOKS doesn't merge the states

  const  switchNameHandler = () => {

    setPersonsState({

      person:[
        { name: 'The Abu',    age: 25 },
        { name: 'The Aman',   age: 25 },
        { name: 'The Leenu',  age: 25 },
        { name: 'The Kanika', age: 28 },
      ]

    })

  }
   
  return (
    <div className="App">
      <h1>Learning React: It's All About Components</h1>
       <p>I will become Billinoaire Someday</p>

       {/** Handling Events here for State Change  */}

       <button onClick={switchNameHandler}>Switch Names</button>

       <Person name={personsState.person[0].name}  age={personsState.person[0].age} />
       <Person name={personsState.person[1].name}  age={personsState.person[1].age} />
       <Person name={personsState.person[2].name}  age={personsState.person[2].age}> My Hobbies : Writing Blog </Person>
       <Person name={personsState.person[3].name}  age={personsState.person[3].age} />
    </div>
  );

  
  
}

export default App;

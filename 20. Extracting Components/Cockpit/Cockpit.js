import React from 'react';
import colors from './Cockpit.css';

const conckpit = (props) => {

    let classes = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = colors.Red;
    }

    if (props.person.length <= 2) {
      classes.push(colors.red);                 
    }

    if (props.person.length <=1) {
      classes.push(colors.bold);              
    }


    return (

        <div className={colors.Cockpit}>
        
            <h1>Learning React: It's All About Components</h1>
            <p className={classes.join(' ')}> I will become Billinoaire Someday</p>
            <button 
                className={btnClass}
                onClick={props.clicked}>
                Show Persons
            </button>
        
        </div>


    )

}

export default conckpit;
import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.person.map((value, index) => {

            return  <Person  
                    key={index}
                    click={() => props.clicked(index)}
                    changed={(event) => props.changed(event, value.id)}
                    name={value.name} 
                    age={value.age} 
                />  
            }); 


export default persons;
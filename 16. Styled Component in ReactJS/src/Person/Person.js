
import React from 'react';

import styled from 'styled-components';

const person = (props) => {

    // For Styling : It returns a component

    const StyleDiv = styled.div`                  

        width: 60%;
        margin:16px auto;
        border: 1px solid dodgerblue;
        box-shadow: 0 2px 3px #ccc;
        padding: 16px;
        text-align: center;
        color: blue;
        font-weight: bold;
       

        @media (min-width: 500px) {
            width:      450px;
            color:      green;
         }

         `;         ;

    return (
        
       // How to use Styled Component

       <StyleDiv>

            <p onClick={props.click}>My name is {props.name} and I'm {props.age} years old, {props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}/>
        
        </StyleDiv>
    )
}



export default person;
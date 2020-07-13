import React from 'react';

const CharComponent = (props) => {

    const style = {                         // Inline-Styles
        
        display:   'inline-block',
        padding:   '16px',
        textAlign: 'center',
        margin:    '16px',
        border:    '1px solid black'
    
    }

    return (
        
        <div style={style} onClick={props.click}>
            <p>{props.character}</p>
        </div>
    );

};


export default CharComponent;
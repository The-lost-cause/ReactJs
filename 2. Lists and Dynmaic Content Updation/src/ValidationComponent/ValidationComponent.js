import React from 'react';

 const Validation = (props) => {

    let validationMethod = 'Text Longh Enough';

    if(props.inputLength <= 5) {
        
        validationMethod = 'Text Too Short';
   
    }

    return(
        <div>
          <p>{validationMethod}</p>
        </div>
    );

};

export default Validation;
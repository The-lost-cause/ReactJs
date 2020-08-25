import React from 'react';
import { useEffect, useRef, useContext  } from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../context/auth-context';


const Cockpit = (props) => {

  // Understanding useContext Hook in Functional Based Component.
  const authContext = useContext(AuthContext);
  console.log(authContext.authenticated);

  const toggleBtnRef = useRef(null);

  // Can send HTTP request inside this hook
  useEffect(()=>  { 
    console.log('[Cockpit.js] useEffect React Hook running...') 
    setTimeout(() => {
      alert('Saved Data To Cloud')
    }, 2000)
  }, [props.persons]);

  // Showing How can we even stop after first render Cycle
  useEffect(()=> {
    alert('Yo Rendered only Once');
    toggleBtnRef.current.click();
  }, []);

  // Cleanup in UseEffect
  useEffect(()=>  { 
    console.log('[Cockpit.js] useEffect React Hook running...') 
    setTimeout(() => {
      alert('Saved Data To Cloud 2 ')
    }, 2000)
 
    return () => { console.log('[Cockpit.js] CleanUp Rendering..')}
  }, []);

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }

    if (props.personsLength <=1) {
      assignedClasses.push(classes.bold)
    }

    return (
        <div className={classes.Cockpit}>
            <h1 className={assignedClasses.join(' ')}>{props.author  }</h1>
            <button
              ref={toggleBtnRef} 
              className={btnClass}
              onClick={props.clicked}>Toggle
            </button>
              <button onClick={authContext.login}>Log In</button>
        </div>
    );
}



export default React.memo(Cockpit) ;
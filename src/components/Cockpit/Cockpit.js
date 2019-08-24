import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {


  useEffect( () => {
    console.log('[Cockpit.js] useEffect');
    // Can use the same as componentDidUpdate
    // Http request...
    // executes for every render cycle
    const timer = setTimeout( () => {
       alert('Saved data to the cloud');
    }, 1000);
    return () => {
      // runs after every render cycle
      clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
//  }, [props.persons] ); // will only execute when our persons changed
}, [] ); // will only run the first time

  useEffect( () => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      // runs after every render cycle
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    }

  }); // will only run the every time it renders



  const classes = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
    // we aren't using this
  }
  if (props.persons.length <= 2) {
    classes.push('red'); // red
  }
  if (props.persons.length <= 1) {
    classes.push('bold'); // red and bold
  }
  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <button style={style}
        onClick = { props.clicked }>
        Toggle Persons
      </button>
    </div>
  );
};
export default cockpit;

import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
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
  return (
    <div classname={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <button
        onClick = { props.clicked }>
        Toggle Persons
      </button>
    </div>
  );
};
export default cockpit;

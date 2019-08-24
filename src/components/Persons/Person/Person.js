import React from 'react';
import './Person.css';

const person = ( props ) => {
  /* const rnd = Math.random();
  if (rnd > 0.1) {
    throw new Error('Something went wrong');
  } */
  console.log('[Person.js] rendering...');
  return (
    <div className="Person" >
      <p onClick={props.click}>
        I'm a Person, my name is {props.name} and I'm {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  );
};

export default person;

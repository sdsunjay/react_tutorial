import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
const app = ( props ) => {
   const [ personsState, setPersonsState ]  = useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value'
  });

  //const [otherState, setOtherState] = useState({otherState: 'some other state value'});

  //console.log(personsState, otherState);
  switchNameHandler = (newName) => {
    // console.log('was clicked');
    //DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    {persons: [
      {name: newName, age: 30},
      {name: 'Manu', age: 31},
      {name: 'Stephanie', age: 32}
    ]}
  );
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
      <button onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button>
      <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age} />
      <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Not Maximilian!')}> My hobbies: Racing</Person>
      <Person
        name={this.state.persons[2].name}
        age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
};

export default app;

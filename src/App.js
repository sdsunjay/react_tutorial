import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);

    // Set the state directly. Use props if necessary.
    this.state = {
      // you can set any properties
      persons: [
        {name: 'Max', age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 26}
      ],
      otherState: 'some value',

      // Note: think carefully before initializing
      // state based on props!
      // someInitialValue: this.props.initialValue
    }
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked');
    //DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState(
      {persons: [
        {name: newName, age: 30},
        {name: 'Manu', age: 31},
        {name: 'Stephanie', age: 32}
      ]}
    );
  }


  nameChangeHandler = (event) => {
    this.setState( {
      persons: [
        {  name: 'Max', age: 28 },
        {  name: event.target.value, age: 29 },
        {  name: 'Stephanie', age: 26 }
      ]
    } )
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, 'Maximilian')}>
          Switch Name
        </button>
      /*we will conditionall show or hide this div*/
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Not Maximilian!')}
            changed={this.nameChangeHandler}>
            My hobbies: Racing</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}/>
        </div>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

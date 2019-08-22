import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);

    // Set the state directly. Use props if necessary.
    this.state = {
      // you can set any properties
      persons: [
        { id: 'qwe', name: 'Max', age: 28},
        { id: 'asd', name: 'Manu', age: 29},
        { id: 'zxc', name: 'Stephanie', age: 26}
      ],
      otherState: 'some value',
      showPersons: false
      // Note: think carefully before initializing
      // state based on props!
      // someInitialValue: this.props.initialValue
    }
    // This binding is necessary to make `this` work in the callback
    this.togglePersonsHandler = this.togglePersonsHandler.bind(this);
    // This binding is necessary to make `this` work in the callback
    this.nameChangedHandler = this.nameChangedHandler.bind(this);
  }
  nameChangedHandler = (event, id ) => {

    // findIndex takes a function as a parameter
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person  = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    let persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons } )
  }

  deletePersonHandler = (personIndex) => {
   //const persons = this.state.persons.slice();
   const persons = [...this.state.persons];
   persons.splice(personIndex, 1);
   this.setState({persons: persons});
  }

  togglePersonsHandler(){
    this.setState(state => ({
      showPersons: !state.showPersons
    }));
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    let btnClass = '';

    if(this.state.showPersons ) {
      persons = (
        <div>
        {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              />
          })}
        </div>
      );
      btnClass = classes.red;
      style.backgroundColor = 'red';
    }

    const assignedClasses = [];
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red); //red
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold); // red and bold
    }


    return (
      <div className={assignedClasses.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          className={btnClass}
          onClick = { this.togglePersonsHandler }>
          Toggle Persons
        </button>
        {/* We will conditionall show or hide this div */}
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  } // closes the render function
}

// Radium is a higher order component
export default App;

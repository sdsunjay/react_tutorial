import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);
  }

  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map( (person, index) => {
      return (
        <Person
          click={() => this.props.clicked( index )}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={( event ) => this.props.changed(event, person.id)}
        />
      );
    });
  };
}
export default Persons;

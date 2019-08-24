import React, {Component} from 'react';
import './Person.css';

class Person extends Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);
  }
  render() {
    /* const rnd = Math.random();
  if (rnd > 0.1) {
    throw new Error('Something went wrong');
  } */
    console.log('[Person.js] rendering...');
    return (
      <div className="Person" >
        <p onClick={this.props.click}>
      I'm a Person, my name is {this.props.name} and I'm {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </div>
    );
  }
}

export default Person;

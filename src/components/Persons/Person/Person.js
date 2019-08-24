import React, {Component} from 'react';
import './Person.css';
import Aux from '../../hoc/Aux'

class Person extends Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);
  }
  /**

  shouldComponentUpdate(nextProps, nextState) {
    // return this.props == nextProps
    console.log('[Persons.js] shouldComponentUpdate');
    // if there has been a change in person's name,
    //re-render, otherwise don't
    // this logic doesn't work for removing the last Person Component
    return (nextProps.name !== this.props.name)

  }
  */
  render() {
    /* const rnd = Math.random();
  if (rnd > 0.1) {
    throw new Error('Something went wrong');
  } */
    console.log('[Person.js] rendering...');
    return (
      <Aux>
      <div className="Person" >
        <p onClick={this.props.click}>
            I'm a Person, my name is {this.props.name} and I'm {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </div>
      <div>
        <p>Adjacent JSX element on a root level</p>
      </div>
      </Aux>
    );
  }
}

export default Person;

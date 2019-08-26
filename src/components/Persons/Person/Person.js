import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import './Person.css';
import Aux from '../../../hoc/Aux'
import withClass from '../../../hoc/withClass'
import AuthContext from '../../../context/auth-context';


class Person extends Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);
    // this is the more modern approach
    this.inputElementRef = React.createRef();
  }
  componentDidMount() {
    //this.inputElement.focus();
    this.inputElementRef.current.focus();
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

      return(
        <Fragment >
          <AuthContext.Consumer>
            {context => context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}
          </AuthContext.Consumer>
          <p onClick = {this.props.click} >
            I'm a Person, my name is {this.props.name} and I'm {this.props.age} years old!
          </p>
          <p> {this.props.children} < /p>
          <input
          // only works in class based components
          // ref = { (inputEl) => {this.inputElement =  inputEl}}
          ref = {this.inputElementRef}
          type = "text"
          onChange = {this.props.changed}
          value = {this.props.name} />
        </Fragment>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, 'Person');

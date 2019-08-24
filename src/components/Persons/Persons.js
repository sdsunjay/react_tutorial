import React, {
  Component
} from 'react';
import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);
  }

  /*
  static getDerivedStateFromProps(props, state) {
    // you don't really use this
    console.log('[Persons.js] getDerivedStateFromProps');
    return state;
  }
  */

  /*
  componentWillReceiveProps(props) {
  // has been removed
    console.log('[Persons.js] componentWillReceiveProps', props);
  }
  */

  shouldComponentUpdate(nextProps, nextState) {
    // return this.props == nextProps
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    // save some stuff right before the componentDidUpdate
    return {
      message: 'Snapshot!'
    };
  }

  /**
  componentWillUpdate(){
    // has been removed
    //  should not be used
  }
  */

  componentDidUpdate(prevProps, prevState, snapshot) {
    // you will use this most often
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }
  componentDidMount() {
    console.log('[Persons.js] componentDidMount');
  }

  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
      return ( <
        Person click = {
          () => this.props.clicked(index)
        }
        name = {
          person.name
        }
        age = {
          person.age
        }
        key = {
          person.id
        }
        changed = {
          (event) => this.props.changed(event, person.id)
        }
        />
      );
    });
  };
}
export default Persons;

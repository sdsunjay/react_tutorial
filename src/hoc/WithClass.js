import React from 'react';

// function that returns a function
const withClass = (WrappedComponent, className) => {
  // returning another function defintion
  return props => (
    <div className={className}>
      <WrappedComponent />
    </div>

  );
};

export default withClass;

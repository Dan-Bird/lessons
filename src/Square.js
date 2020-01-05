import React from 'react';

const Square = props => {
  return (
    <button data-testid="square" className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Square;

import React from 'react';

const Square = props => {
  console.log('win called');

  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Square;

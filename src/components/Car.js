//basic car component which utilises Context

import React, { Fragment } from "react";

const Car = props => {
  return (
    <Fragment>
      <p>Name: {props.name}</p>
      <p>Price: ${props.price}</p>
      <button onClick={props.incrementPrice}>&uarr;</button>
      <button onClick={props.decrementPrice}>&darr;</button>
    </Fragment>
  );
};

export default Car;

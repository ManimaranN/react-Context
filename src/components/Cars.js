//this can be termed to be the consumer of CarContext using useContext

import React, { Fragment, useContext, useEffect } from "react";
import CarContext from "../context/CarContext";
import Car from "./Car";

const Cars = () => {
  const carDetails = useContext(CarContext);
  useEffect(() => {
    console.log(carDetails);
  }, [carDetails]);
  return (
    <Fragment>
      <h4>cars:</h4>
      {console.log(Object.keys(carDetails.cars), ":context here")}
      {Object.keys(carDetails.cars).map(carID => (
        <Car
          key={carID}
          name={carDetails.cars[carID].name}
          price={carDetails.cars[carID].price}
          incrementPrice={() => carDetails.incrementPrice(carID)}
          decrementPrice={() => carDetails.decrementPrice(carID)}
        />
      ))}
    </Fragment>
  );
};

export default Cars;

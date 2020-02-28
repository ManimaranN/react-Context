//provider function for react Context named "CarContext" in ./Context.js

import React, { useEffect } from "react";
import CarContext from "./CarContext";
import { useState } from "react";

const Provider = props => {
  const carList = {
    car001: { name: "Honda", price: 100 },
    car002: { name: "BMW", price: 150 },
    car003: { name: "Mercedes", price: 200 }
  };

  const [cars, setCars] = useState(carList);

  return (
    <CarContext.Provider
      value={{
        cars: cars,
        incrementPrice: selectedId => {
          const carsList = Object.assign({}, cars);
          console.log(selectedId, ":selected id");
          carsList[selectedId].price = carsList[selectedId].price + 1;
          setCars(carsList);
        },
        decrementPrice: selectedId => {
          const carsList = Object.assign({}, cars);
          carsList[selectedId].price = carsList[selectedId].price - 1;
          setCars(carsList);
        }
      }}
    >
      {props.children}
    </CarContext.Provider>
  );
};

export default Provider;

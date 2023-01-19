"use strict";

export const select = (array, id, updateCarInput) => {
  const selectedCar = array.find((car) => car.id === +id);
  updateCarInput[0].value = selectedCar.name;
  updateCarInput[1].value = selectedCar.color;
};

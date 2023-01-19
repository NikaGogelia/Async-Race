"use strict";
import { rest } from "./fetchData.js";
import { garageApi } from "../index.js";
import { carNames } from "../data/carNames.js";
import { garage } from "../pages/garage.js";

const generateNumber = 100;

const randomColor = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
};

const randomName = () => {
  let name = "";
  name = carNames[Math.floor(Math.random() * carNames.length)];
  return name;
};

export const generateCars = (array, render) => {
  let arr = [];
  for (let i = 0; i < generateNumber; i++) {
    let obj = {
      name: randomName(),
      color: randomColor(),
    };

    arr.push(obj);
  }

  setTimeout(() => {
    arr.forEach((item) => {
      rest.post(garageApi, item);
    });
    rest.get(garageApi).then((res) => {
      array = res;
      render(array);
    });
  }, 2000);
};

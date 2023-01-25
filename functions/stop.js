"use strict";
import { engineApi } from "../index.js";
import { rest } from "./fetchData.js";

export const stop = (cars, id) => {
  let drive = {};
  rest
    .patch(`${engineApi}?id=${id}&status=stopped`)
    .then((res) => (drive = res));

  setTimeout(() => {
    cars.forEach((car) => {
      if (+car.getAttribute("data-index") === +id) {
        car.style.transform = `translateX(${drive.velocity}px)`;
      }
    });
  }, 2000);
};

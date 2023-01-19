"use strict";
import { rest } from "./fetchData.js";
import { engineApi } from "../index.js";

export const start = (button, cars, id, trackWidth, driving) => {
  let drive = {};
  let driveStatus = "";
  button.disabled = true;

  rest
    .patch(`${engineApi}?id=${id}&status=started`)
    .then((res) => (drive = res));
  rest.patch(`${engineApi}?id=${id}&status=drive`).then((res) => {
    if (res.success === true) {
      driveStatus = res?.success;
    } else {
      alert("Car has been stopped suddenly. It's engine was broken down.");
      button.disabled = false;
    }
  });

  setTimeout(() => {
    let i = 0;
    let interval = setInterval(() => {
      if (driveStatus) {
        if (i >= trackWidth - 240) {
          i = trackWidth - 240;
          clearInterval(interval);
        } else {
          i += +drive?.velocity;
        }

        cars.forEach((car) => {
          if (car.getAttribute("data-index") === id) {
            car.style.transform = `translateX(${i}px)`;
          }
        });
      }
    }, 100);
  }, 2000);
};

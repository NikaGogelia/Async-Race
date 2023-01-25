"use strict";
import { start } from "./start.js";
import { stop } from "./stop.js";

export const garageOptions = (arr, cars, trackWidth) => {
  const buttons = document.querySelectorAll(".garage-options > button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      switch (button.id) {
        case "race":
          for (let i = 0; i < arr.length; i++) {
            start(cars, arr[i].id, trackWidth);
          }
          break;
        case "reset":
          for (let i = 0; i < arr.length; i++) {
            stop(cars, arr[i].id);
          }
          break;
      }
    });
  });
};

"use strict";
import { garageApi, pages, winnersApi } from "../index.js";
import { start } from "../functions/start.js";
import { stop } from "../functions/stop.js";
import { select } from "../functions/select.js";
import { remove } from "../functions/remove.js";
import { garage } from "../pages/garage.js";

export let selectedId = 0;
export const trackOptions = (
  arr,
  cars,
  buttons,
  updateCarInput,
  trackWidth
) => {
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const currentButton = e.target;
      const id = currentButton.getAttribute("data-index");
      switch (currentButton.id) {
        case "remove":
          remove(garageApi, id, arr, garage);
          remove(winnersApi, id);
          break;
        case "select":
          select(arr, id, updateCarInput);
          selectedId = id;
          break;
        case "start":
          start(cars, id, trackWidth);
          break;
        case "stop":
          stop(cars, id);
          break;
      }
    });
  });
};

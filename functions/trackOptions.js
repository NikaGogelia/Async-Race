"use strict";
import { garageApi, pages } from "../index.js";
import { start } from "../functions/start.js";
import { stop } from "../functions/stop.js";
import { select } from "../functions/select.js";
import { remove } from "../functions/remove.js";
import { garage } from "../pages/garage.js";

export let selectedId = 0;
export const trackOptions = (arr) => {
  const updateCarInput = document.querySelectorAll(".update-car > input");
  const buttons = document.querySelectorAll(".track-options button");
  const cars = document.querySelectorAll(".car");
  const trackWidth = pages.clientWidth;

  buttons.forEach((button) => {
    if (button.id === "stop") {
      button.disabled = true;
    }

    button.addEventListener("click", (e) => {
      const currentButton = e.target;
      const id = currentButton.getAttribute("data-index");
      switch (currentButton.id) {
        case "remove":
          remove(garageApi, id, arr, garage);
          break;
        case "select":
          select(arr, id, updateCarInput);
          selectedId = id;
          break;
        case "start":
          start(currentButton, cars, id, trackWidth);
          break;
        case "stop":
          stop(currentButton, cars, id);
          break;
      }
    });
  });
};

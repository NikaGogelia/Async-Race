"use strict";
import { pages } from "../index.js";
import { track } from "../components/track.js";
import { trackOptions } from "./trackOptions.js";
import { garageOptions } from "./garageOptions.js";

export const displayPaginatedItems = (array, container, row, page) => {
  container.innerHTML = "";
  page--;

  let s = row * page;
  let e = s + row;
  let paginatedArr = array.slice(s, e);
  let items = paginatedArr.map((item) => track(item).outerHTML).join("");
  container.innerHTML = items;

  const updateCarInput = document.querySelectorAll(".update-car > input");
  const buttons = document.querySelectorAll(".track-options button");
  const cars = document.querySelectorAll(".car");
  const trackWidth = pages.clientWidth;

  // Garage Options
  garageOptions(paginatedArr, cars, trackWidth);
  // Track Options
  trackOptions(paginatedArr, cars, buttons, updateCarInput, trackWidth);
};

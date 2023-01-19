"use strict";
import { track } from "../components/track.js";
import { trackOptions } from "./trackOptions.js";

export const displayPaginatedItems = (array, container, row, page) => {
  container.innerHTML = "";
  page--;

  let s = row * page;
  let e = s + row;
  let paginatedArr = array.slice(s, e);
  let items = paginatedArr.map((item) => track(item).outerHTML).join("");
  container.innerHTML = items;

  // Track Options
  trackOptions(array);
};

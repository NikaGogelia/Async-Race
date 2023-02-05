"use strict";
import { pages } from "../index.js";

export const loader = () => {
  pages.innerHTML = "";
  pages.innerHTML = `
    <div class="loader-container">
        <div class="loader">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
        </div>
    </div>
    `;
};

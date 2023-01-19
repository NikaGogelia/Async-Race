"use strict";
// Components
import { paginationButton } from "../components/paginationButton.js";
// Functions
import { rest } from "../functions/fetchData.js";
import { garageApi, engineApi, pages } from "../index.js";
import { generateCars } from "../functions/generateCars.js";
import { displayPaginatedItems } from "../functions/displayPaginatedItems.js";
// Variables
import { selectedId } from "../functions/trackOptions.js";

export const garage = (arr) => {
  pages.innerHTML = "";
  const div = document.createElement("div");
  div.id = "garage";

  if (localStorage.getItem("currentPage") === null) {
    localStorage.setItem("currentPage", 1);
  }

  let currentPage = localStorage.getItem("currentPage");
  const row = 7;
  const pageCount = Math.ceil(arr.length / row);

  div.innerHTML = `
        <div class="form-container">
            <form id="form">
                <div class="input-container create-car d-flex justify-content-start align-items-center">
                    <input type="text" name="carName" placeholder="Car Name" />
                    <input type="color" name="carColor" value="#ffffff"/>
                    <button id="create" type="submit">Create</button>
                </div>
                <div class="input-container update-car d-flex justify-content-start align-items-center">
                    <input type="text" name="updateCarName" placeholder="Update Car Name" />
                    <input type="color" name="updateCarColor" value="#ffffff"/>
                    <button id="update" type="submit">Update</button>
                </div>
            </form>
        </div>
        <div class="garage-options d-flex">
          <button id="race">Race</button>
          <button id="reset">Reset</button>
          <button id="generate">Generate Cars</button>
        </div>
        <div class="cars-container">
            <h2>Garage [${arr.length}]</h2>
            <div class="car-list"></div>
        </div>
        <div class="pagination d-flex justify-content-center align-items-center">
          ${Array(pageCount)
            .fill("")
            .map((_, index) => paginationButton(index + 1))
            .join("")}
        </div>
    `;

  pages.append(div);

  // DOM Variables After Garage Page Render
  const form = document.getElementById("form");
  const generate = document.getElementById("generate");
  const tracksContainer = document.querySelector(".car-list");
  const paginationButtons = document.querySelectorAll(".pagination-button");

  // Garage Options
  generate.addEventListener("click", () => generateCars(arr, garage));

  // Display Paginated Tracks
  displayPaginatedItems(arr, tracksContainer, row, currentPage);

  // Change Paginated Page
  paginationButtons.forEach((button) => {
    button.addEventListener("click", () => {
      displayPaginatedItems(arr, tracksContainer, row, button.id);
      currentPage = button.id;
      localStorage.setItem("currentPage", currentPage);
    });
  });

  // Update Api With Form Data
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    let carName = formData.get("carName");
    let carColor = formData.get("carColor");
    let updateCarName = formData.get("updateCarName");
    let updateCarColor = formData.get("updateCarColor");

    // Create Car
    if (carName !== "") {
      rest.post(garageApi, {
        name: carName,
        color: carColor,
      });
      setTimeout(
        () =>
          rest.get(garageApi).then((res) => {
            arr = res;
            garage(arr);
          }),
        500
      );
    }

    // Update Car
    if (updateCarName !== "") {
      rest.put(`${garageApi}/${selectedId}`, {
        name: updateCarName,
        color: updateCarColor,
      });
      setTimeout(
        () =>
          rest.get(garageApi).then((res) => {
            arr = res;
            garage(arr);
          }),
        500
      );
    }
  });
};

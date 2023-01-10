"use strict";
import { track } from "./components/track.js";
import { rest } from "./js/fetchData.js";

const api = "http://localhost:3000";
const garageApi = "http://localhost:3000/garage";
const engineApi = "http://localhost:3000/engine";

const app = document.getElementById("app");

let activeNav = "garage";
let carList = [];
let drive = {};
let status = "";

// First Load Garage Page
window.onload = () => {
  rest.get(garageApi, carList, garage);
};

// Render Website Main Elements
app.innerHTML = `
    <div class="dark-back"></div>
    <header>
        <nav class="navbar">
            <h1 class="nav-brand">Async Race</h1>
            <div class="nav-links">
                <button>Garage</button>
                <button>Winners</button>
            </div>
        </nav>
    </header>
    <main id="pages"></main>
`;

const pages = document.getElementById("pages");
const navLinks = document.querySelectorAll(".nav-links > button");

// Change Page Root
navLinks.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerHTML) {
      case "Winners":
        pages.innerHTML = "";
        pages.innerHTML = winners;
        activeNav = e.target.innerHTML;
        break;
      case "Garage":
        rest.get(garageApi, carList, garage);
        activeNav = e.target.innerHTML;
        break;
    }
  });
});

// --------------------------------- GARAGE PAGE --------------------------------- //
const garage = (array) => {
  pages.innerHTML = "";
  const div = document.createElement("div");
  div.id = "garage";

  div.innerHTML = `
        <div class="">
        
        </div>
        <div class="form-container">
            <form id="form">
                <div class="input-container create-car">
                    <input type="text" name="carName" placeholder="Car Name" />
                    <input type="color" name="carColor" value="#ffffff"/>
                    <button id="create" type="submit">Create</button>
                </div>
                <div class="input-container update-car">
                    <input type="text" name="updateCarName" placeholder="Update Car Name" />
                    <input type="color" name="updateCarColor" value="#ffffff"/>
                    <button id="update" type="submit">Update</button>
                </div>
            </form>
        </div>
        <div class="cars-container">
            <h2>Garage [${array.length}]</h2>
            <div class="car-list">
              ${
                array.length > 0
                  ? array.map((car) => track(car).outerHTML).join("")
                  : "<h4>No Cars In Garage</h4>"
              }
            </div>
        </div>
    `;

  pages.append(div);

  const form = document.getElementById("form");
  const updateCarInput = document.querySelectorAll(".update-car > input");
  const buttons = document.querySelectorAll(".track-options button");
  const car = document.querySelectorAll(".car");

  let selectedId = 0;
  let speed = 0;
  console.log(car);
  // Track Options
  buttons.forEach((button) =>
    button.addEventListener("click", (e) => {
      console.log(e.target.id);
      const id = e.target.getAttribute("data-index");
      switch (e.target.id) {
        case "remove":
          rest.delete(`${garageApi}/${id}`);
          setTimeout(() => rest.get(garageApi, array, garage), 500);
          break;
        case "select":
          const selectedCar = array.find((car) => car.id === +id);
          updateCarInput[0].value = selectedCar.name;
          updateCarInput[1].value = selectedCar.color;
          selectedId = id;
          break;
        case "start":
          speed = 0;
          status = "started";
          rest
            .patch(`${engineApi}?id=${id}&status=${status}`)
            .then((res) => (drive = res));

          setTimeout(() => {
            let interval = setInterval(() => {
              speed += +drive?.velocity;
              console.log(speed);
              car.forEach((car) => {
                if (car.getAttribute("data-index") === id) {
                  car.style.transform = `translateX(${speed}px)`;
                }
              });
              if (speed >= pages.offsetWidth) {
                clearInterval(interval);
              }
            }, 400);
          }, 2000);
          break;
        case "stop":
          status = "stopped";
          rest
            .patch(`${engineApi}?id=${id}&status=${status}`)
            .then((res) => (drive = res));
          break;
      }
    })
  );

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
      rest.get(garageApi, array, garage);
    }

    // Update Car
    if (updateCarName !== "") {
      rest.put(`${garageApi}/${selectedId}`, {
        name: updateCarName,
        color: updateCarColor,
      });
      setTimeout(() => rest.get(garageApi, array, garage), 500);
    }
  });
};

// --------------------------------- WINNERS PAGE --------------------------------- //
const winners = `
    <div id="winners">
        <h2>Winners</h2>
    </div>
`;

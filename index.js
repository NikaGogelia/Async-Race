"use strict";
import { rest } from "./functions/fetchData.js";
import { loader } from "./components/loader.js";
import { garage } from "./pages/garage.js";
import { winners } from "./pages/winners.js";

export const api = "http://localhost:3000";
export const garageApi = "http://localhost:3000/garage";
export const engineApi = "http://localhost:3000/engine";
export const winnersApi = "http://localhost:3000/winners";

const app = document.getElementById("app");

const music = new Audio("./assets/sounds/Mike Noise-Low Earth Orbit.mp3");

export let carList = [];
export let winnerList = [];
let isPlaying = false;

// First Load Garage Page
window.onload = () => {
  loader();
  // Render Cars
  setTimeout(() => {
    rest.get(garageApi).then((res) => {
      carList = res;
      garage(carList);
    });
  }, 2000);

  // Play Audio By Default
  // music.play();
  // isPlaying = true;
};

// Render Website Main Elements
app.innerHTML = `
    <div class="dark-back"></div>
    <header>
        <nav class="navbar d-flex justify-content-between align-items-center">
            <div class="nav-links d-flex justify-content-between align-items-center">
                <button id="garage">Garage</button>
                <button id="winners">Winners</button>
            </div>
            <h1 class="nav-brand">Async Race</h1>
            <button id="audio"><img src="./assets/icons/volume-on.svg" alt="volume-icon" /></button>
        </nav>
    </header>
    <main id="pages"></main>
`;

export const pages = document.getElementById("pages");
const navLinks = document.querySelectorAll(".nav-links > button");
const audioButton = document.getElementById("audio");
const audioImage = document.querySelector("#audio > img");

// Change Page Root
navLinks.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.id) {
      case "winners":
        loader();
        setTimeout(() => {
          rest.get(winnersApi).then((res) => {
            winnerList = res;
            winners(winnerList);
          });
        }, 2000);
        break;
      case "garage":
        loader();
        setTimeout(() => {
          rest.get(garageApi).then((res) => {
            carList = res;
            garage(carList);
          });
        }, 2000);
        break;
    }
  });
});

// Turn On && Off Audio
audioButton.addEventListener("click", () => {
  if (isPlaying) {
    isPlaying = false;
    audioImage.setAttribute("src", "./assets/icons/volume-off.svg");
    music.pause();
  } else {
    isPlaying = true;
    audioImage.setAttribute("src", "./assets/icons/volume-on.svg");
    music.play();
    music.loop = true;
  }
});

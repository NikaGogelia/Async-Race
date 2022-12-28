"use strict";
const app = document.getElementById("app");

let activeNav = "garage";

const changeRoot = (rootName) => {
  rootName === "garage" ? (pageRoot = "winners") : (pageRoot = "garage");
  console.log(pageRoot);
};

const garage = `
    <div id="garage">
        <div class="form-container">
            <form>
                <div class="input-container">
                    <input type="text" name="car-name" placeholder="Car Name" /> 
                    <input type="color" name="color-picker" />
                    <button id="create">Create</button>
                </div>
                <div class="input-container">
                    <input type="text" name="car-name" placeholder="Car Name" /> 
                    <input type="color" name="color-picker" />
                    <button id="update" >Update</button>
                </div>
            </form>
        </div>
        <div class="cars-container">
            <h2>Garage [0]</h2>
        </div>
    </div>
`;

const winners = `
    <div id="winners">
        <h2>Winners</h2>
    </div>
`;

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
    <main>
    </main>
`;

const main = document.querySelector("main");
const navLinks = document.querySelectorAll(".nav-links > button");

navLinks.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerHTML) {
      case "Winners":
        main.innerHTML = winners;
        activeNav = "winners";
        break;
      case "Garage":
        main.innerHTML = garage;
        activeNav = "garage";
        break;
    }
  });
});

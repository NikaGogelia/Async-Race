"use strict";
import { pages, winnersApi, garageApi } from "../index.js";
import { rest } from "../functions/fetchData.js";

export const winners = (arr) => {
  pages.innerHTML = "";
  const div = document.createElement("div");
  div.id = "winners";

  div.innerHTML = `
    <h2>Winners [${arr.length}]</h2>
    <div class="winners-table-container">
        <table border = "1" width = "100%">
         <thead>
            <tr>
               <td>Number</td>
               <td>Car</td>
               <td>Name</td>
               <td>Wins</td>
               <td>Best Time (s)</td>
            </tr>
         </thead>
         <tbody>
            ${arr.map((item) => {
              const { id, wins, time } = item;
              return `
                <tr>
                    <td>${id}</td>
                    <td>car</td>
                    <td>name</td>
                    <td>${wins}</td>
                    <td>${time}</td>
                </tr>
                `;
            })}
         </tbody>
        </table>
    </div>
    `;

  pages.append(div);
};

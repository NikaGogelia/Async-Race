"use strict";

// Render Track Function
export const track = (car) => {
  const div = document.createElement("div");
  div.classList =
    "track d-flex flex-column justify-content-center align-items-start";

  const { id, name, color } = car;

  div.innerHTML = `
        <div id="car-${id}" class="track-options d-flex align-items-center">
            <div class="d-flex flex-column">
                <button id="select" data-index="${id}">select</button>
                <button id="remove" data-index="${id}">remove</button>
            </div>
            <div class="d-flex flex-column">
                <button id="start" data-index="${id}">start</button>
                <button id="stop" data-index="${id}">stop</button>
            </div>
            <p style="text-transform: capitalize;">${name}</p>
        </div>
        <div class="car-container">
          <svg class="car" data-index="${id}" fill="${color}" id="eYC6Xx4uWHK1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1280 640" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
            <g transform="matrix(-.1 0 0-.102384 1279.852636 647.494209)">
              <path d="M6770,5134c-376-33-552-63-818-141l-123-36l65-66c36-37,66-71,66-77c0-5-80-56-177-113-553-323-1055-648-1208-782l-54-47-97-7c-221-17-445,26-572,111l-55,36-256-26c-728-77-1334-166-1630-242-73-19-157-34-185-34-171,0-434-119-644-292-58-48-87-64-145-80-176-50-380-144-533-246-105-71-245-191-299-257l-38-46l12-220c7-121,16-259,21-307c7-64,6-91-3-103-7-9-31-44-54-77L0,2021l58-26c297-137,804-233,1324-252l177-6l3,94l3,94l47,7c71,12,93-1,127-77c97-214,327-430,552-518c256-101,550-100,797,2c212,88,418,281,524,490c21,42,43,82,49,89c7,9,34,12,87,10l77-3-2-67-2-66l62-6c95-8,4885-29,4897-21c7,4,10,28,9,59-2,28,0,57,4,64c5,8,35,12,87,12h79l41-77c134-258,382-458,654-528c166-42,377-44,536-4c105,26,265,101,346,162c123,94,240,232,317,377l32,61l128,6c143,6,157,1,157-53c0-31,2-33,28-29c15,3,160,23,322,45c726,99,897,126,932,148c42,26,273,273,295,315c28,55,32,95,16,156-23,84-18,239,12,441c31,197,29,272-4,340-14,29-75,96-166,185-125,121-148,149-175,208-16,37-32,67-34,67s-109,27-237,60l-234,59v51v50h-60c-33,0-91,3-128,7l-68,6l2,53c2,30,1,56-2,58-2,2-53-2-114-10-60-7-116-13-123-14-10,0-13,18-11,73c1,39-1,74-5,76s-51-4-105-14l-98-18-214,75c-880,310-1980,624-2671,762-480,97-816,135-1228,140-157,2-305,2-330,0Zm580-294c287-17,652-61,678-83c8-6,11-20,7-36-11-44-246-795-251-800-4-4-1902-70-2046-71h-87l-6,38c-30,181-125,302-237,302-140,0-324-119-455-295-49-66-62-73-145-74-61-1-78,10-56,36c22,27,863,583,1000,661c389,223,628,292,1103,321c201,12,297,12,495,1Zm1204-191c482-121,874-249,1098-359c228-111,260-177,115-230-59-21-961-92-1349-107-163-6-178-5-184,11-7,18,43,696,53,722c9,23,57,16,267-37Zm-665-766c23-27,60-86,83-132l43-84v-111c-1-193-60-381-214-682-102-198-156-277-270-397-122-126-226-204-365-272-176-87-223-96-551-106-389-11-1984-44-2185-44h-165l-7,60c-9,69-53,651-70,923-18,280,7,415,109,583c82,136,194,251,219,226c4-4-22-37-58-75-165-170-245-377-236-605c11-248,80-1042,92-1055c11-11,141-11,747,2c404,9,941,18,1194,21c475,7,597,14,700,40c254,67,520,262,674,495c105,159,284,543,322,689c22,88,25,232,5,306-19,72-52,131-102,185-24,26-44,54-44,64c0,31,38,16,79-31ZM1779,3686c10-12,0-28-51-88-136-155-349-314-553-413-171-82-361-135-380-106-11,19,42,87,138,175c235,215,486,361,732,426c86,23,99,24,114,6Zm10681-187c24-51,43-106,44-127l1-37-120-6c-66-4-269-7-450-8-361-1-379,1-519,59-92,39-141,69-130,80c5,5,153,25,329,45c176,21,408,47,515,60c107,12,216,23,241,24l46,1l43-91ZM2757,3160c142-19,263-66,400-156c106-69,176-139,238-238c221-355,164-766-150-1082-78-79-193-144-325-186-105-32-336-33-452-1-188,53-288,111-402,234-264,286-306,650-118,1014c81,156,286,319,482,384c116,38,208,46,327,31Zm7284,0c429-62,753-460,726-890-26-403-291-713-682-795-112-24-291-24-375,0-337,94-610,416-637,752-13,157,39,373,124,521c130,224,335,361,611,407c96,16,149,17,233,5ZM492,2779c109-23,197-89,244-181c13-26,24-52,24-58s-55-10-155-10h-155v-30-31l-127,3-127,3-8,40c-5,22-20,50-33,63-46,43-26,129,38,167c73,43,191,57,299,34Zm-41-356c6-6,12-38,13-70l1-58-112-3c-127-3-125-4-138,82-5,36-3,51,7,58c19,13,215,5,229-9Zm-1-173c0-19-30-84-48-103-22-24-85-57-110-57-16,0-22,13-35,78-8,42-13,80-10,85c7,11,203,9,203-3Z" />
              <path d="M2521,3085c-358-78-560-298-616-672-18-120-18-186-1-283c51-281,250-481,571-576c76-23,109-27,210-27c146,0,237,22,375,89c81,40,108,60,185,138c50,50,105,117,124,148c72,124,119,315,107,439-24,238-131,452-291,582-79,64-219,131-325,157-100,23-242,25-339,5Z" />
              <path d="M9781,3085c-184-42-297-101-412-215-73-73-93-100-138-190-69-140-95-260-88-415c3-92,10-124,36-196c50-134,112-233,210-330c131-130,263-189,466-208c403-39,737,183,836,554c16,62,21,111,22,215c1,163-15,236-78,365-97,200-250,330-475,405-85,29-284,37-379,15Z" />
              <path d="M5765,4931c-93-39-549-258-1385-668-190-93-385-187-433-208l-89-40l50-23c112-51,361-90,499-79c62,5,66,7,354,197c392,258,752,488,934,595c83,48,156,94,164,101c12,11,8,22-25,73-21,34-41,61-44,60-3,0-14-4-25-8Z" />
            </g>
          </svg>
        </div>
        <img class="finish-line" src="./assets/images/finish.jpg" alt="finish-line-image" />
    `;

  return div;
};
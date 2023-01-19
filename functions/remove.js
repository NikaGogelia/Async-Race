"use strict";
import { rest } from "./fetchData.js";

export const remove = (api, id, array, render) => {
  rest.delete(`${api}/${id}`);
  setTimeout(
    () =>
      rest.get(api).then((res) => {
        array = res;
        render(array);
      }),
    500
  );
};

"use strict";

// Fetch Data From Api Function
const fetchData = async (endpoint, method, headers, dataParams) => {
  try {
    const response = await fetch(endpoint, {
      method: method,
      headers: headers,
      body: JSON.stringify(dataParams),
    });

    if (!response.ok) {
      const message = `Error Occurred While Fetching Data: ${response.status}`;
      throw new Error(message);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// HTTP Methods Request Function
const rest = {
  get: (api, arr, render) =>
    fetchData(api, "GET").then((res) => {
      arr = res;
      render(arr);
    }),
  post: (api, data) =>
    fetchData(api, "POST", { "Content-Type": "application/json" }, data),
  put: (api, data) =>
    fetchData(api, "PUT", { "Content-Type": "application/json" }, data),
  patch: (api) => fetchData(api, "PATCH"),
  delete: (api) => fetchData(api, "DELETE"),
};

export { rest };

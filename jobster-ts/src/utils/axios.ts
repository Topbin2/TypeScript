import axios from "axios";

export const customFetch = axios.create({
  baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
});

// customFetch.interceptors.request.use((config: any) => {
//   const user = getUserFromLocalStorage();
//   if (user) {
//     config.headers.common["Authorization"] = `Bearer ${user.token}`;
//   }
//   return config;
// });

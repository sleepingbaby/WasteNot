import axios from "axios";

// Added api route to test cookies 
const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    withCredentials: true,
  });

export default api;


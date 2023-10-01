import axios from "axios";

const token = localStorage.getItem("token");

const api = axios.create({
  baseURL: import.meta.env.VITE_NEST_API,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default api;

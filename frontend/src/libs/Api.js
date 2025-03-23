import axios from "axios";
import { useState } from "react";
//const [token, setToken] = useState(null)
const user = JSON.parse(localStorage.getItem("user")) || {};
const token = user?.token;
console.log(token, "token")
const Api = axios.create({
  baseURL: "https://e-shop-lmrp.onrender.com/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  },
});

export default Api;
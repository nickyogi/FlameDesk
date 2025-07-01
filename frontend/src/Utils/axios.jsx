import axios from "axios";

const createAxiosInstance = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    console.log("Auth token not found");
    throw new Error("No auth token found");
  }

  return axios.create({
    baseURL: "https://taskflow-backend-67so.onrender.com/api",
    headers: { Authorization: `Bearer ${token}` }
  });
};

export default createAxiosInstance;

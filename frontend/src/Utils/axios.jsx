import axios from "axios";

const createAxiosInstance = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    console.log("Auth token not found");
    throw new Error("No auth token found");
  }

  return axios.create({
    baseURL: "http://localhost:4000/api",
    headers: { Authorization: `Bearer ${token}` }
  });
};

export default createAxiosInstance;

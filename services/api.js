import axios from "axios";

export const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL
});

export const uploadModel = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  return API.post("/upload", formData);
};

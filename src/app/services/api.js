import axios from "axios";

// Flask Backend Base URL
const BASE_URL = "http://localhost:3000";

// === AUTHENTICATION API ===
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const signup = async (email, password, role) => {
  try {
    const response = await axios.post(`${BASE_URL}/signup`, { email, password, role });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// === DOCUMENT API ===
export const uploadDocument = async (file, uploader) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("uploader", uploader);

    const response = await axios.post(`${BASE_URL}/upload`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const verifyDocument = async (hash) => {
  try {
    const response = await axios.post(`${BASE_URL}/verify`, { hash });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// === DASHBOARD API ===
export const fetchDashboard = async (email) => {
  try {
    const response = await axios.get(`${BASE_URL}/dashboard`, { params: { email } });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

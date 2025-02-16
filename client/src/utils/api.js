import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";

// Generic API request function
const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${API_BASE_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error.response?.data || error.message);
    return null; // Return null to indicate failure
  }
};

export const fetchHourlyTraffic = () => fetchData("/api/hourly-traffic");

export const fetchIpTraffic = () => fetchData("/api/ip-data");

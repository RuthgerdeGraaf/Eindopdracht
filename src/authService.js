import axios from "axios";

const API_BASE_URL = "https://api.datavortex.nl/whattoplay";

export const getData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/your-endpoint`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
};

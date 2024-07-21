// authService.js
import axios from "axios";

const API_BASE_URL = "https://api.datavortex.nl/whattoplay";

export const authenticateUser = async (credentials) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/users/authenticate`,
      credentials,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": "whattoplay:ooBH8YLepfnOLSLnHj41",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error authenticating user:", error);
    throw error;
  }
};

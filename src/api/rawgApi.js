import axios from "axios";

const API_KEY = "b1eb8aa7538a41c5a153784c24bae9e1";
const BASE_URL = "https://api.rawg.io/api";

export const fetchGames = async (filters = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}/games`, {
      params: {
        key: API_KEY,
        ...filters,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching games:", error);
    return { results: [] };
  }
};

export const fetchGameById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/games/${id}`, {
      params: {
        key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching game with id ${id}:`, error);
    throw error;
  }
};

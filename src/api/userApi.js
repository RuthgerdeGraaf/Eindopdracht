const BASE_URL = "https://novi.datavortex.nl/api";
const API_KEY = "whattoplay:ooBH8YLepfnOLSLnHj41";

export async function createUser(data) {
  try {
    const response = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": API_KEY,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const result = await response.json();
      console.error("Error:", response.status, response.statusText, result);
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("createUser error:", error);
    throw error;
  }
}

export async function uploadAvatar(username, file) {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch(`${BASE_URL}/users/${username}/upload`, {
      method: "POST",
      headers: {
        "X-Api-Key": API_KEY,
      },
      body: formData,
    });

    if (!response.ok) {
      const result = await response.json();
      console.error("Error:", response.status, response.statusText, result);
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("uploadAvatar error:", error);
    throw error;
  }
}

export async function getUser(username) {
  try {
    const response = await fetch(`${BASE_URL}/users/${username}`, {
      method: "GET",
      headers: {
        "X-Api-Key": API_KEY,
      },
    });

    if (!response.ok) {
      const result = await response.json();
      console.error("Error:", response.status, response.statusText, result);
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("getUser error:", error);
    throw error;
  }
}

export async function updateUser(username, data) {
  try {
    const response = await fetch(`${BASE_URL}/users/${username}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": API_KEY,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const result = await response.json();
      console.error("Error:", response.status, response.statusText, result);
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("updateUser error:", error);
    throw error;
  }
}

export async function authenticateUser(credentials) {
  try {
    const response = await fetch(`${BASE_URL}/users/authenticate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": API_KEY,
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const result = await response.json();
      console.error("Error:", response.status, response.statusText, result);
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("authenticateUser error:", error);
    throw error;
  }
}

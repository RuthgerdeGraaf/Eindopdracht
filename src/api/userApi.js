const BASE_URL = "https://api.datavortex.nl/whattoplay";
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

    const resultText = await response.text();
    if (!resultText) {
      throw new Error("Empty response");
    }

    const result = JSON.parse(resultText);
    return result;
  } catch (error) {
    console.error("getUser error:", error);
    throw error;
  }
}

export async function uploadFile(file) {
  const url = "https://novi.datavortex.nl/upload";
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: "Bearer YOUR_AUTH_TOKEN", // Replace YOUR_AUTH_TOKEN with your actual token
        "Content-Type": "multipart/form-data", // This might not be necessary as browsers usually set it correctly with FormData
      },
    });

    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}`);
    }

    const result = await response.json();
    console.log("File uploaded successfully:", result);
  } catch (error) {
    console.error("Upload failed:", error);
  }
}

export async function getAvatar(username) {
  try {
    const response = await fetch(`${BASE_URL}/users/${username}/avatar`, {
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
    return result.url; // Assuming the response contains a URL to the avatar
  } catch (error) {
    console.error("getAvatar error:", error);
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

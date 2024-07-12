// src/api/userApi.js

export async function createUser(data) {
  const response = await fetch("https://novi.datavortex.nl/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": "whattoplay:ooBH8YLepfnOLSLnHj41",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const result = await response.json();
  return result;
}

export async function uploadAvatar(file) {
  const formData = new FormData();
  formData.append("avatar", file);

  const response = await fetch("https://novi.datavortex.nl/api/upload", {
    method: "POST",
    headers: {
      "X-Api-Key": "whattoplay:ooBH8YLepfnOLSLnHj41",
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const result = await response.json();
  return result;
}

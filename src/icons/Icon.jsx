// src/components/Icon.js

import React from "react";

const icons = {
  return: (
<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#00000"><path d="M196-305q-28-40-39.5-83.5T145-480q0-136 98.5-234.5T476-813h43l-69-70 45-45 160 160-160 160-46-45 69-69h-39q-99 0-171 72t-72 170q0 32 6.5 60.5T260-369l-64 64ZM464-29 304-189l160-162 45 47-70 69h43q98 1 170-71t72-172q0-31-6.5-59.5T699-589l65-64q27 43 39 86t12 89q0 137-98.5 236.5T485-143h-46l70 70-45 44Z"/></svg>
  ),
  // Voeg hier meer iconen toe als dat nodig is
};

const Icon = ({ name }) => {
  return <>{icons[name]}</>;
};

export default Icon;
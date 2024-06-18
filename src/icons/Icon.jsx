import React from "react";

const icons = {
  return: (
    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"></svg>
  ),
};


const Icon = ({ name }) => {
  return <>{icons[name]}</>;
};

export default Icon;

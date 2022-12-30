import React from "react";

const Card = (props) => {
  return <div className="bg-white rounded-md shadow-lg shadow-gray-800">{props.children}</div>;
};

export default Card;

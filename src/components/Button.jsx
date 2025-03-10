import React from "react";

const Button = (props) => {
  return (
    <button
      className="h-12 text-white bg-black "
      style={{ color: props.color }}
    >
      {props.text}
      {props.children}
    </button>
  );
};

export default Button;

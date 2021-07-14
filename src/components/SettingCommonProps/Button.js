import React from "react";

const Button = ({
  onClick,
  color,
  border,
  backGround,
  display,
  count,
  underline,
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        color: color,
        borderRadius: border,
        background: backGround,
        display: display,
        textDecoration: underline,
      }}
    >
      <h1>Hi, Click me to inclement {count}</h1>
    </div>
  );
};

export default Button;

import React from "react";

const Button = (props) => {
  const { onClick, children } = props;

  return (
    <div className="button-container" onClick={(e) => onClick && onClick(e)}>
      {children}
    </div>
  );
};

export default Button;

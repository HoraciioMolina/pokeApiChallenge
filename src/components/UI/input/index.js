import React from "react";

export const Input = (props) => {
  const { name, value, placeholder, onChangeValue } = props;
  return (
    <div className="input-container">
      <input
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChangeValue}
      />
      <i className="input-container-icon" />
    </div>
  );
};

export default Input;

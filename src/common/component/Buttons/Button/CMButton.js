import React from "react";

const CMButton = ({ text, type, onClick }) => {
  switch (type) {
    case "primary":
      return (
        <div>
          <button className={type} onClick={onClick}>
            {text}
          </button>
        </div>
      );
    default:
      return (
        <div>
          <button className={type} onClick={onClick}>
            {text}
          </button>
        </div>
      );
  }
};

export default CMButton;

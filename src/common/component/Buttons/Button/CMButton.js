import React from "react";
import "./CMButton.scss";

const CMButton = ({ text, type, onClick }) => {
  return (
    <div
      className={`button ${type === "Remove" ? "removeBtn" : "viewBtn"}`}
      onClick={onClick}
    >
      <p>{text}</p>
    </div>
  );
};

export default CMButton;

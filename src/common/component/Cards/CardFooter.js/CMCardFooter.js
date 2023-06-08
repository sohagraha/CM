import React from "react";
import "./CMCardFooter.scss";

const CMCardFooter = ({ date }) => {
  return <div className="cmCardFooter">Last updated: {Date.now()}</div>;
};

export default CMCardFooter;

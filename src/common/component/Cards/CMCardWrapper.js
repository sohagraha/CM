import React from "react";
import "./CMCardWrapper.scss";

const CMCardWrapper = (props) => {
  return <div className="cardWrapper">{props.children}</div>;
};

export default CMCardWrapper;

import React from "react";
import BoltIcon from "../../../../assets/images/boltIcon.svg";
import "./CMCardHeader.scss";
const CMCardHeader = ({ header }) => {
  return (
    <div className="header">
      <p className={header}>
        {header === "automated" ? (
          <>
            <img className="icon-image" src={BoltIcon} alt="" />
            Automated
          </>
        ) : (
          "Manual"
        )}{" "}
        Origin
      </p>
    </div>
  );
};

export default CMCardHeader;

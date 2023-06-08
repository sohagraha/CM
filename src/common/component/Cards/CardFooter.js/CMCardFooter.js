import React from "react";
import "./CMCardFooter.scss";
import moment from "moment/moment";

const CMCardFooter = ({ date }) => {
  return (
    <div className="cmCardFooter">
      Last updated : {moment(date).format("MMM DD, YYYY @ hh:mm A")}
    </div>
  );
};

export default CMCardFooter;

import React from "react";
import CMCardWrapper from "../../common/component/Cards/CMCardWrapper";
import CMCardHeader from "../../common/component/Cards/CardHeader/CMCardHeader";
import CMCardFooter from "../../common/component/Cards/CardFooter.js/CMCardFooter";
import CMButtonWrapper from "../../common/component/Buttons/CMButtonWrapper";
import CMButton from "../../common/component/Buttons/Button/CMButton";

import "./CMCard.scss";

const CMCard = ({ data }) => {
  return (
    <CMCardWrapper>
      <CMCardHeader header={data?.originType} />

      <div className="cardBody">
        <div>
          <span className="title">{data?.name}</span>
        </div>
        <span className="intents">{data?.intents} Intents</span>
      </div>

      <CMButtonWrapper>
        <CMButton
          text="View"
          type={"viewBtn"}
          onClick={
            // Add onClick event handler here
            () => {
              alert("View");
            }
          }
        />
        <CMButton
          text="Remove"
          type={"removeBtn"}
          onClick={
            // Add onClick event handler here
            () => {
              alert("Remove");
            }
          }
        />
      </CMButtonWrapper>
      <CMCardFooter date={data?.dateUpdated} />
    </CMCardWrapper>
  );
};

export default CMCard;

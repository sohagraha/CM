import React from "react";
import CMCardWrapper from "../../common/component/Cards/CMCardWrapper";
import CMCardHeader from "../../common/component/Cards/CardHeader/CMCardHeader";
import CMCardFooter from "../../common/component/Cards/CardFooter.js/CMCardFooter";
import CMButtonWrapper from "../../common/component/Buttons/CMButtonWrapper";
import CMButton from "../../common/component/Buttons/Button/CMButton";

const CMCard = ({ data }) => {
  return (
    <CMCardWrapper>
      <CMCardHeader header={data?.originType} />
      <div className="card-body">
        <h2>{data.name}</h2>
        <p>{data.description}</p>
        <p>{data.price}</p>
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

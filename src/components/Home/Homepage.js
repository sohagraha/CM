import React from "react";
import { sampleData } from "../../data/sampleData";
import CMSearch from "../SearchField/CMSearch";
import CMCard from "../Card/CMCard";

const Homepage = () => {
  const [data, setData] = React.useState(sampleData);
  return (
    <div className="">
      <CMSearch sampleData={sampleData} setData={setData} />
      <div>
        {data.map((data) => {
          return <CMCard key={data.id} data={data} />;
        })}
      </div>
    </div>
  );
};

export default Homepage;

import React from "react";
import { sampleData } from "../../data/sampleData";
import CMSearch from "../SearchField/CMSearch";
import CMCard from "../Card/CMCard";
import "./HomePage.scss";

const Homepage = () => {
  const [data, setData] = React.useState(sampleData);
  console.log(sampleData);
  return (
    <div className="home">
      <CMSearch sampleData={sampleData} setData={setData} />
      <div className="cardContainer">
        {data.map((data) => {
          return <CMCard key={data.id} data={data} />;
        })}
      </div>
    </div>
  );
};

export default Homepage;

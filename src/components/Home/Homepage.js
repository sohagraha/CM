import React from "react";
import { sampleData } from "../../data/sampleData";
import CMSearch from "../SearchField/CMSearch";
import CMCard from "../Card/CMCard";
import "./HomePage.scss";
import CMNotFound from "../../common/component/NotFound/CMNotFound";

const Homepage = () => {
  const [data, setData] = React.useState(sampleData);
  console.log(sampleData);
  return (
    <div className="home">
      <CMSearch sampleData={sampleData} setData={setData} />
      <div className="cardContainer">
        {data.length ? (
          data.map((data) => {
            return <CMCard key={data.id} data={data} />;
          })
        ) : (
          <CMNotFound />
        )}
      </div>
    </div>
  );
};

export default Homepage;

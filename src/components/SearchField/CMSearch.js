import React from "react";
import "./CMSearch.scss";
import { debounce } from "lodash";

const CMSearch = ({ sampleData, setData }) => {
  const filterData = (value) => {
    console.log("searching");
    setData(
      sampleData.filter((data) =>
        data.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const searchFunc = debounce((value) => {
    filterData(value);
  }, 500);

  return (
    <div className="searchContainer">
      <input
        type="text"
        className="searchInput"
        placeholder="Search Here"
        onChange={
          // Add onChange event handler here
          (e) => {
            searchFunc(e.target.value);
          }
        }
      />
    </div>
  );
};

export default CMSearch;

import React from "react";

const CMSearch = ({ sampleData, setData }) => {
  return (
    <div className="">
      <input
        type="text"
        className=""
        placeholder="Search Here"
        onChange={
          // Add onChange event handler here
          (e) => {
            setData(
              sampleData.filter((data) =>
                data.name.toLowerCase().includes(e.target.value.toLowerCase())
              )
            );
          }
        }
      />
      <button
        className=""
        type="button"
        id=""
        onClick={() => {
          setData(sampleData.filter((data) => data.name === "Test Manual"));
        }}
      >
        Search
      </button>
    </div>
  );
};

export default CMSearch;

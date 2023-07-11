import React, { useState } from "react";
import { links } from "../../assets/images-links";

function Filter({ selectedFilter, setSelectedFilter }) {
  return (
    <div className="filter-div">
      {links.map((item, i) => (
        <div
          key={i}
          className={`links-box ${i === selectedFilter && "selected-box"}`}
          onClick={() => {
            setSelectedFilter(i);
          }}
        >
          <img src={item?.imgSrc} className="links-img" />
          <p
            className={`links-label ${i == selectedFilter && "selected-label"}`}
          >
            {item?.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Filter;

import React from "react";
import Card from "./card";

function Cards({ list, selectedCategory = 0 }) {
  return (
    <div className="cards-flex">
      {list.filter(item => item.category === selectedCategory).length !== 0 ? list.filter(item => item.category === selectedCategory).map((card, i) => (
        <Card card={card} key={i} />
      ))
    
     :
     <p>We currently do not have houses for this category.</p>
     }
    </div>
  );
}

export default Cards;

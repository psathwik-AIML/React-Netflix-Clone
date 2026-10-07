import React, { useEffect, useRef } from "react";
import "./TitleCards.css";
import cardsData from "../../assets/cards/Cards_data";
function TitleCards() {
  const cardsRef = useRef();
  useEffect(() => {
    cardsRef.current.addEventListener("wheel", handleScroll);
  }, []);
  function handleScroll(e) {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  }
  return (
    <div className="title-cards">
      <h2>popular on netflix</h2>
      <div className="all-cards" ref={cardsRef}>
        {cardsData.map((eachCard, index) => {
          return (
            <div className="card" key={index}>
              <img src={eachCard.image} alt="" />
              <p>{eachCard.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TitleCards;

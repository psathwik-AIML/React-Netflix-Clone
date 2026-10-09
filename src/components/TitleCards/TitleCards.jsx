import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import cardsData from "../../assets/cards/Cards_data";
function TitleCards({ title, category }) {
  // use state to store movies api data
  const [movies, setMovies] = useState([]);
  async function getMovies() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
      },
    };
    const page = Math.floor(Math.random() * 100) + 1;
    let req = await fetch(
      `https://api.themoviedb.org/3/movie/${category}?language=te-In&page=${page}`,
      options,
    );
    let res = await req.json();
    setMovies(res.results);
  }
  const cardsRef = useRef(null);
  useEffect(() => {
    getMovies();

    const element = cardsRef.current;
    element.addEventListener("wheel", handleScroll);

    return () => {
      removeEventListener(element);
    };
  }, [category]);
  // function
  function handleScroll(e) {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  }
  return (
    <div className="title-cards">
      <h2>{title}</h2>
      <div className="all-cards" ref={cardsRef}>
        {movies.map((eachCard, index) => {
          const { backdrop_path, id, title: movie } = eachCard;
          const image = `https://image.tmdb.org/t/p/w500/${backdrop_path}`;
          return (
            <div className="card" key={id}>
              <img src={image} alt={movie} />
              <p>{movie}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TitleCards;

import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import banner from "../../assets/hero_banner.jpg";
import title from "../../assets/hero_title.png";
import play from "../../assets/play_icon.png";
import info from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <div className="hero">
        <img src={banner} alt="" className="hero-banner" />
        <div className="hero-caption">
          <img src={title} alt="" className="title" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus quia alias nostrum facilis a soluta provident.
            Repellendus quia alias nostrum facilis a soluta provident.
          </p>
          <div className="hero-buttons">
            <button>
              <img src={play} alt="" />
              play
            </button>
            <button className="info">
              <img src={info} alt="" />
              more info
            </button>
          </div>
          <TitleCards title="Now Playing" category="now_playing" />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title="Popular" category="popular" />
        <TitleCards title="Top Rating" category="top_rated" />
        <TitleCards title="Upcoming" category="upcoming" />
      </div>
      <Footer />
    </>
  );
}

export default Home;

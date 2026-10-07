import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search from "../../assets/search_icon.svg";
import profile from "../../assets/profile_img.png";
function Navbar() {
  const [dark, setDark] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setDark(true);
    } else {
      setDark(false);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={dark ? "navbar dark" : "navbar"}>
      <div className="nav-left">
        <img src={logo} alt="" />
      </div>
      <div className="nav-middle">
        <ul>
          <li>Home</li>
          <li>Popular</li>
          <li>Tv Shows</li>
          <li>Animations</li>
          <li>Movies</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="nav-right">
        <img src={search} alt="" className="search" />
        <img src={profile} alt="" className="profile-icon" />
        <p className="sign-out">sign out</p>
      </div>
    </div>
  );
}

export default Navbar;

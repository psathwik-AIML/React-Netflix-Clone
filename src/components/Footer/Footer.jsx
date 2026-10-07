import React from "react";
import "./Footer.css";
import twitter from "../../assets/twitter_icon.png";
import facebook from "../../assets/facebook_icon.png";
import instagram from "../../assets/instagram_icon.png";
import youtube from "../../assets/youtube_icon.png";
function Footer() {
  return (
    <div className="footer">
      <div className="social-icons">
        <img src={facebook} alt="" />
        <img src={youtube} alt="" />
        <img src={instagram} alt="" />
        <img src={twitter} alt="" />
      </div>
      <div className="side-links">
        <p>About Us</p>
        <p>Services</p>
        <p>Products</p>
        <p>Pricing</p>
        <p>Blog</p>
        <p>Careers</p>
        <p>Contact Us</p>
        <p>Support</p>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
        <p>FAQs</p>
        <p>Follow Us</p>
      </div>
      <div className="copy-rights">
        <h2>&copy; 2026 coder rights reserved.</h2>
      </div>
    </div>
  );
}

export default Footer;

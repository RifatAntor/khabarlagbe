import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/food.jpg";
import "../css_files/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1 style={{ fontWeight: "bold" }}>KHABAR LAGBE </h1>
        <p>Bengali Food</p>
        <Link to="/menu">
          <button> ORDER korun </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

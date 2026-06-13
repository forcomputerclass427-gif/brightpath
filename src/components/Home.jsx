import React from "react";
import naturalLogo from "../assets/6.jpg"
import earthQuake from "../assets/2.jpg"
import floodImage from "../assets/3.jpg"
import landslideImage from "../assets/1.jpg"
const Home = () => {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="overlay">

          {/* Logo */}
          <img
            src={naturalLogo}
            alt="Natural Disaster Awareness Logo"
            className="logo"
          />

          {/* Title */}
          <h1>Natural Disaster Awareness & Response System</h1>

          {/* Slogan */}
          <h3 className="slogan">
            "Prepared Today, Protected Tomorrow"
          </h3>

          <h3 className="slogan">
            "Stay Safe Today,
            You Have To Save a Life of Other Tommrow"
          </h3>

          {/* Description */}
          <p>
            Learn about earthquakes, floods, landslides, storms, and other
            natural disasters. Stay informed with safety guidelines and
            emergency preparedness tips to protect yourself, your family,
            and your community.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <button>Explore Disasters</button>
            <button className="btn-outline">Emergency Guide</button>
          </div>
        </div>
      </section>

      {/* Disaster Cards */}
      <section className="disaster-section">
        <h2>Major Natural Disasters</h2>

        <div className="cards">
          <div className="card">
             <img
            src={earthQuake}
            alt="Earthquake"
            className="image"
          />
            <h3>Earthquake</h3>
            <p>
              Sudden ground shaking caused by tectonic plate movement.
            </p>
          </div>

          <div className="card">
            <img
            src={floodImage}
            alt="Flood"
            className="image"
            />
            <h3>Flood</h3>
            <p>
              Overflowing water that can damage homes and infrastructure.
            </p>
          </div>

          <div className="card">
            <img
            src={landslideImage}
            alt="Landslide"
            className="image"
            />
            <h3>Landslide</h3>
            <p>
              Rapid movement of rock and soil down a slope.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="tips">
        <h2>Safety First</h2>

        <div className="tips-grid">
          <div className="tip"> Keep an emergency kit ready.</div>
          <div className="tip"> Stay updated with alerts.</div>
          <div className="tip"> Know evacuation routes.</div>
          <div className="tip"> Create a family emergency plan.</div>
        </div>
      </section>

      {/* Footer Banner */}
      <section className="banner">
        <h2>Together We Build Disaster-Resilient Communities</h2>
      </section>

    </div>
  );
};

export default Home;
import React from "react";


const About = () => {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Our Mission</h1>
        <p>
          “Not just a system — a life-saving response network in critical disaster situations.”
        </p>
      </section>

      {/* Mission */}
      <section className="about-section">
        <div className="text-box">
          <h2> Who We Are</h2>
          <p>
            We are a dedicated Natural Disaster Awareness & Emergency Response
            platform focused on saving lives, reducing damage, and improving
            disaster readiness across communities. Our system connects people
            with real-time alerts, safety guidance, and emergency support.
          </p>
        </div>
      </section>

      {/* Risk & Work */}
      <section className="risk-section">
        <h2> High-Risk Operations</h2>

        <div className="risk-grid">
          <div className="risk-card">
            <h3> Emergency Response</h3>
            <p>
              We operate in extreme disaster conditions like floods, earthquakes,
              and landslides to coordinate rapid rescue support.
            </p>
          </div>

          <div className="risk-card">
            <h3> Hazard Monitoring</h3>
            <p>
              Continuous tracking of environmental changes to predict and
              reduce disaster impact before it happens.
            </p>
          </div>

          <div className="risk-card">
            <h3> Rescue Coordination</h3>
            <p>
              Managing evacuation routes, rescue teams, and emergency vehicles
              in high-pressure situations.
            </p>
          </div>

          <div className="risk-card">
            <h3> Real-Time Alerts</h3>
            <p>
              Sending instant warnings to communities during life-threatening
              natural disasters.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Unique */}
      <section className="unique-section">
        <h2> What Makes Us Different</h2>

        <div className="unique-boxes">
          <div className="unique-card"> Fastest Emergency System</div>
          <div className="unique-card"> Zero Delay Alert System</div>
          <div className="unique-card"> Nationwide Coverage</div>
          <div className="unique-card"> Smart Disaster Prediction</div>
          <div className="unique-card"> Community Driven Support</div>
        </div>
      </section>

      {/* Vision */}
      <section className="vision">
        <h2> Our Vision</h2>
        <p>
          To build a world where no life is lost due to lack of awareness or
          delayed emergency response. We aim to create a fully connected,
          disaster-resilient society.
        </p>
      </section>

    </div>
  );
};

export default About;
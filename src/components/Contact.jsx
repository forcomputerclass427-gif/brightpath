import React from "react";


const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          Need assistance, want to report a disaster, or have a question?
          We're here to help 24/7.
        </p>
      </section>

      {/* Contact Container */}
      <section className="contact-container">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Personal Details</h2>

          <form>
            <div className="input-group">
              <input type="text" placeholder="Full Name" required />
            </div>

            <div className="input-group">
              <input type="email" placeholder="Email Address" required />
            </div>

            <div className="input-group">
              <input type="tel" placeholder="Phone Number" required />
            </div>

            <div className="input-group">
              <input type="text" placeholder="Address" required />
            </div>

            <div className="input-group">
              <select>
                <option>Select Disaster Type</option>
                <option>Earthquake</option>
                <option>Flood</option>
                <option>Landslide</option>
                <option>Storm</option>
                <option>Other</option>
              </select>
            </div>

            <div className="input-group">
              <textarea
                rows="5"
                placeholder="Describe your issue or emergency..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Report 
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <h2>Emergency Contact</h2>

          <div className="info-card">
            <h3> Hotline</h3>
            <p>24/7 Emergency Support</p>
          </div>

          <div className="info-card">
            <h3> Email</h3>
            <p>support@disasterguard.com</p>
          </div>

          <div className="info-card">
            <h3> Office</h3>
            <p>Disaster Management Center</p>
          </div>

          <div className="info-card">
            <h3> Response Time</h3>
            <p>Available 24 Hours</p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <h2>Our Location</h2>

        <div className="map-container">
          <iframe
            title="location-map"
            src="https://maps.google.com/maps?q=Kathmandu,Nepal&t=&z=13&ie=UTF8&iwloc=&output=embed"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="contact-banner">
        <h2> Together We Build Safer Communities</h2>
        <p>
          Your safety is our priority. Contact us anytime for support,
          information, or emergency assistance.
        </p>
      </section>
    </div>
  );
};

export default Contact;
import React from "react";
const Services = () => {
  const services = [
    
  {
    icon: "🚨",
    title: "24/7 Emergency Response",
    desc: "Rapid disaster response teams available day and night to provide immediate assistance during emergencies.",
  },
  {
    icon: "🚑",
    title: "All Types of Vehicles",
    desc: "Emergency vehicles, rescue vans, ambulances, boats, and support trucks ready for deployment.",
  },
  {
    icon: "🛡️",
    title: "Zero-Risk Preparedness",
    desc: "Advanced planning, monitoring, and safety protocols to minimize risks and protect communities.",
  },
  {
    icon: "📡",
    title: "Early Warning System",
    desc: "Real-time alerts and notifications for floods, earthquakes, storms, and other disasters.",
  },
  {
    icon: "🤝",
    title: "Community Protection",
    desc: "Helping families, schools, and organizations prepare for emergencies and disasters.",
  },
  {
    icon: "🌍",
    title: "Nationwide Coverage",
    desc: "Disaster support services available across urban and rural areas.",
  },
];
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>
          Reliable disaster preparedness, emergency response, and community
          safety services available 24 hours a day.
        </p>
      </section>

      {/* Highlight Cards */}
      <section className="highlights">
        <div className="highlight-card">
          <h2> 24 Hours Service</h2>
          <p>Emergency support available anytime, anywhere.</p>
        </div>

        <div className="highlight-card">
          <h2> 0 Risk Focus</h2>
          <p>Prevention and preparedness to reduce disaster risks.</p>
        </div>

        <div className="highlight-card">
          <h2> All Vehicles Available</h2>
          <p>Rescue vehicles ready for every emergency situation.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </section>

      {/* Vehicle Section */}
     <section className="vehicles">
  <h2>🚒 Emergency Vehicle Fleet</h2>

  <div className="vehicle-grid">
    <div className="vehicle-card">🚑 Ambulances</div>
    <div className="vehicle-card">🚒 Fire Trucks</div>
    <div className="vehicle-card">🚚 Rescue Trucks</div>
    <div className="vehicle-card">🚁 Rescue Helicopters</div>
    <div className="vehicle-card">🛥️ Rescue Boats</div>
    <div className="vehicle-card">🚐 Support Vehicles</div>
    <div className="vehicle-card">🚜 Heavy Recovery Vehicles</div>
      <div className="vehicle-card">🚓 Emergency Command Vehicles</div>
      </div>
</section>
      {/* Banner */}
      <section className="service-banner">
        <h2>Prepared • Protected • Ready 24/7</h2>
        <p>
          Our mission is to keep communities safe through preparedness,
          awareness, and rapid emergency response.
        </p>
      </section>
    </div>
  );
};

export default Services;
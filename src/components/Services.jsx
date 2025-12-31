import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="services-page">
      <h2 className="section-title">Our Featured Services</h2>

      <div className="services-grid">

        <div className="service-card">
          <img src="/images/facial.jpg" alt="Facial" />
          <h3>Facial & Skin Care</h3>
          <p>Glow & rejuvenate your skin with premium facial treatments.</p>
          <Link to="/contact" className="primary-btn oval-btn">
            Book This Service
          </Link>
        </div>

        <div className="service-card">
          <img src="/images/hair.jpg" alt="Hair Styling" />
          <h3>Hair Styling</h3>
          <p>Professional haircuts, spa & styling for all occasions.</p>
          <Link to="/contact" className="primary-btn oval-btn">
            Book This Service
          </Link>
        </div>

        <div className="service-card">
          <img src="/images/makeup.jpg" alt="Makeup" />
          <h3>Makeup</h3>
          <p>Party, professional & bridal makeup services.</p>
          <Link to="/contact" className="primary-btn oval-btn">
            Book This Service
          </Link>
        </div>

        <div className="service-card">
          <img src="/images/bridal.jpg" alt="Bridal Makeup" />
          <h3>Bridal Makeup</h3>
          <p>Luxury bridal beauty packages for your big day.</p>
          <Link to="/contact" className="primary-btn oval-btn">
            Book This Service
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Services;

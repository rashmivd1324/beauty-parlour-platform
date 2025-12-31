import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="services-page">
      <h2 className="section-title">Our Featured Services</h2>

      <div className="services-grid">

        {/* Facial */}
        <div className="service-card">
          <img src="/images/facial.jpg" alt="Facial" />
          <h3>Facial & Skin Care</h3>
          <p>Glow-enhancing facials that rejuvenate and nourish your skin.</p>
          <Link to="/contact" className="primary-btn">
            Book This Service
          </Link>
        </div>

        {/* Hair */}
        <div className="service-card">
          <img src="/images/hair.jpg" alt="Hair Styling" />
          <h3>Hair Styling</h3>
          <p>Professional haircuts, styling, spa, and coloring services.</p>
          <Link to="/contact" className="primary-btn">
            Book This Service
          </Link>
        </div>

        {/* Makeup */}
        <div className="service-card">
          <img src="/images/makeup.jpg" alt="Makeup" />
          <h3>Makeup</h3>
          <p>Party, casual, and professional makeup for all occasions.</p>
          <Link to="/contact" className="primary-btn">
            Book This Service
          </Link>
        </div>

        {/* Bridal */}
        <div className="service-card">
          <img src="/images/bridal.jpg" alt="Bridal Makeup" />
          <h3>Bridal Makeup</h3>
          <p>Complete bridal beauty packages for your special day.</p>
          <Link to="/contact" className="primary-btn">
            Book This Service
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Services;

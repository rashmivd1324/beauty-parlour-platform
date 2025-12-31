import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Beauty, Care & Elegance</h1>
        <p>Premium Beauty Services & Women’s Lifestyle Products</p>

        <div className="hero-buttons">
          {/* ✅ GO TO SERVICES */}
          <Link to="/services" className="primary-btn oval-btn">
            Book Appointment
          </Link>

          <Link to="/products" className="secondary-btn">
            Shop Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;


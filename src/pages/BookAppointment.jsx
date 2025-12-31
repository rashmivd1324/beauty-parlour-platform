import "./BookAppointment.css";
import { Link } from "react-router-dom";

const BookAppointment = () => {
  return (
    <div className="appointment-wrapper">
      <h1 className="appointment-heading">Our Beauty Services</h1>
      <p className="appointment-subtext">
        Transparent pricing for premium care
      </p>

      <div className="services-grid">
        <div className="service-card">
          <img src="/images/facial.jpg" alt="Facial" />
          <h3>Facials & Skin Care</h3>
          <p>Mini Facial – ₹800</p>
          <p>Pro Facial – ₹1500</p>
          <p>Face Cleanup – ₹600</p>
        </div>

        <div className="service-card">
          <img src="/images/makeup.jpg" alt="Makeup" />
          <h3>Makeup & Lashes</h3>
          <p>Party Makeup – ₹2500</p>
          <p>Eye Makeup – ₹700</p>
        </div>

        <div className="service-card bridal">
          <img src="/images/bridal.jpg" alt="Bridal Makeup" />
          <h3>Bridal Makeup</h3>
          <p>Engagement – ₹3500</p>
          <p>Reception – ₹5000</p>
          <p>Wedding – ₹8000</p>
        </div>

        <div className="service-card">
          <img src="/images/hair.jpg" alt="Hair Styling" />
          <h3>Hair Styling</h3>
          <p>Hair Cut – ₹500</p>
          <p>Hair Spa – ₹1200</p>
          <p>Hair Coloring – ₹3000</p>
        </div>
      </div>

      <div className="book-btn-wrapper">
        <Link to="/contact" className="book-now-btn">
          Book Appointment
        </Link>
      </div>
    </div>
  );
};

export default BookAppointment;

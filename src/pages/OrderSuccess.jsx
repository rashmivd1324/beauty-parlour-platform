import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <section className="order-success">
      <div className="success-card">
        <h2>🎉 Order Placed Successfully!</h2>

        <p>
          Thank you for shopping with <b>Elegance</b>.
        </p>
        <p>Your beauty essentials will reach you soon ✨</p>

        <div className="success-buttons">
          <Link to="/" className="primary-btn">
            Back to Home
          </Link>

          <Link to="/products" className="secondary-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrderSuccess;


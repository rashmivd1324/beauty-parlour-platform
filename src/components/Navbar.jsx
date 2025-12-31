import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <h2 className="logo">Elegance</h2>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="nav-actions">
        <Link to="/cart" className="cart">
          🛒
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>

        {/* FIXED */}
        <Link to="/contact" className="primary-btn">
          Book Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;


import { Link } from "react-router-dom";

const Cart = ({ cart, removeFromCart }) => {
  return (
    <section className="cart-page">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <div>
                  <strong>{item.name}</strong>
                  <p>{item.price}</p>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* GO TO CHECKOUT */}
          <Link to="/checkout" className="checkout-btn">
            Proceed to Checkout
          </Link>
        </>
      )}
    </section>
  );
};

export default Cart;

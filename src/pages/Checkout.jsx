import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = ({ cart, clearCart }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [payment, setPayment] = useState("");

  const navigate = useNavigate(); // ✅ navigation hook

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ VALIDATIONS
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }

    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
      alert("Enter a valid Gmail address");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("Phone number must be 10 digits");
      return;
    }

    if (!payment) {
      alert("Please select payment method");
      return;
    }

    // ✅ CREATE ORDER OBJECT
    const order = {
      name,
      email,
      phone,
      payment,
      items: cart,
      date: new Date().toLocaleString(),
    };

    // ✅ SAVE TO LOCAL STORAGE
    const existingOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    existingOrders.push(order);
    localStorage.setItem(
      "orders",
      JSON.stringify(existingOrders)
    );

    clearCart();

    // ✅ GO TO SUCCESS PAGE
    navigate("/order-success");
  };

  return (
    <section className="checkout-page">
      <h2>Checkout</h2>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email (gmail only)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Phone Number (10 digits)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <select
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
        >
          <option value="">Select Payment Method</option>
          <option value="UPI">UPI</option>
          <option value="Card">Credit / Debit Card</option>
          <option value="COD">Cash on Delivery</option>
        </select>

        <button type="submit" className="primary-btn">
          Confirm Order
        </button>
      </form>
    </section>
  );
};

export default Checkout;


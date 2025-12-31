import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    if (!email.endsWith("@gmail.com")) {
      setError("Email must end with @gmail.com");
      return;
    }

    // Phone validation (10 digits)
    if (!/^[0-9]{10}$/.test(phone)) {
      setError("Phone number must be 10 digits");
      return;
    }

    setError("");

    const newAppointment = {
      name,
      email,
      phone,
      service,
      message,
      date: new Date().toLocaleString(),
    };

    const existing =
      JSON.parse(localStorage.getItem("appointments")) || [];

    existing.push(newAppointment);

    localStorage.setItem("appointments", JSON.stringify(existing));

    alert("Appointment booked successfully!");

    setName("");
    setEmail("");
    setPhone("");
    setService("");
    setMessage("");
  };

  return (
    <section className="contact">
      <h2>Book an Appointment</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Your Email (gmail only)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Phone Number (10 digits)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Preferred Service"
          value={service}
          onChange={(e) => setService(e.target.value)}
        />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit" className="primary-btn">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;


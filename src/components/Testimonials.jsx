import testimonialsData from "../data/testimonialsData";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>

      <div className="testimonials-grid">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <p>{testimonial.review}</p>
            <strong>- {testimonial.name}</strong>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;


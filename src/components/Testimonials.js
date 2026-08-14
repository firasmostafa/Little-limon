function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>

      <div className="testimonials-grid">
        <article className="testimonial-card">
          <h3>⭐⭐⭐⭐⭐</h3>
          <p>
            "The food was delicious and the atmosphere was amazing.
            I will definitely come back!"
          </p>
          <strong>Maria</strong>
        </article>

        <article className="testimonial-card">
          <h3>⭐⭐⭐⭐⭐</h3>
          <p>
            "A wonderful Mediterranean restaurant with
            friendly service and fresh food."
          </p>
          <strong>James</strong>
        </article>

        <article className="testimonial-card">
          <h3>⭐⭐⭐⭐</h3>
          <p>
            "Great experience, delicious dishes and
            excellent customer service."
          </p>
          <strong>Sarah</strong>
        </article>
      </div>
    </section>
  );
}

export default Testimonials;
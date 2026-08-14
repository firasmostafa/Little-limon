function Main() {
  return (
    <main className="main">
      <section className="hero">
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>

          <p>
            We are a family-owned Mediterranean restaurant,
            focused on traditional recipes served with a modern twist.
          </p>

          <button>Reserve a Table</button>
        </div>

        <img
          src="/hero.jpg"
          alt="Delicious food at Little Lemon"
        />
      </section>

      <section className="cards">
        <article>
          <img
            src="/food.jpg"
            alt="Delicious Little Lemon food"
          />

          <h2>Our Menu</h2>

          <p>
            Explore our delicious Mediterranean dishes prepared
            with fresh ingredients.
          </p>

          <button>View Menu</button>
        </article>

        <article>
          <h2>Reservations</h2>

          <p>
            Book a table and enjoy a wonderful dining experience
            at Little Lemon.
          </p>

          <button>Book Now</button>
        </article>

        <article>
          <h2>Order Online</h2>

          <p>
            Order your favorite Little Lemon dishes and enjoy
            them wherever you are.
          </p>

          <button>Order Now</button>
        </article>
      </section>
    </main>
  );
}

export default Main;
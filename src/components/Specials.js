function Specials() {
  return (
    <section className="specials">
      <div className="section-title">
        <h2>Specials</h2>
        <button>View Menu</button>
      </div>

      <div className="specials-grid">

        <article className="special-card">
          <img src="/greek%20salad.jpg" alt="Greek Salad" />
          <h3>Greek Salad</h3>
          <p>
            Fresh vegetables, olives and feta cheese
            served with our special dressing.
          </p>
          <button>Order Now</button>
        </article>

        <article className="special-card">
          <img src="/bruchetta.svg" alt="Bruschetta" />
          <h3>Bruschetta</h3>
          <p>
            Fresh tomatoes, basil and olive oil
            served on toasted bread.
          </p>
          <button>Order Now</button>
        </article>

        <article className="special-card">
          <img src="/food.jpg" alt="Little Lemon special dish" />
          <h3>Special Dish</h3>
          <p>
            A delicious Mediterranean dish prepared
            with fresh ingredients.
          </p>
          <button>Order Now</button>
        </article>

      </div>
    </section>
  );
}

export default Specials;
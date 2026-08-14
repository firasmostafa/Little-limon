function MenuPage() {
  return (
    <main className="main">
      <section className="specials">
        <div className="section-title">
          <h2>Our Menu</h2>
          <button>Order Online</button>
        </div>

        <div className="specials-grid">

          <article className="special-card">
            <img
              src="/greek%20salad.jpg"
              alt="Greek Salad"
            />

            <h3>Greek Salad</h3>

            <p>
              Fresh vegetables, olives and feta cheese
              served with our special dressing.
            </p>

            <button>Order Now</button>
          </article>


          <article className="special-card">
            <img
              src="/bruchetta.svg"
              alt="Bruschetta"
            />

            <h3>Bruschetta</h3>

            <p>
              Fresh tomatoes, basil and olive oil
              served on toasted bread.
            </p>

            <button>Order Now</button>
          </article>


          <article className="special-card">
            <img
              src="/food.jpg"
              alt="Grilled Mediterranean Dish"
            />

            <h3>Grilled Special</h3>

            <p>
              A delicious Mediterranean dish prepared
              with fresh ingredients.
            </p>

            <button>Order Now</button>
          </article>

        </div>
      </section>
    </main>
  );
}

export default MenuPage;
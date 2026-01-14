function Menu() {
  return (
    <main className="page">
      <h1>Menu</h1>

      <section className="menu-section">
        <article className="menu-item">
          <div className="menu-img placeholder">
            <img
              src="/menu/greek-salad.jpg"
              alt="Greek Salad"
              className="menu-img"
            />
          </div>
          <div className="menu-content">
            <h3>Greek Salad</h3>
            <p>
              Fresh lettuce, tomatoes, olives, feta cheese, and crunchy garlic
              croutons.
            </p>
            <span className="price">$12.99</span>
          </div>
        </article>

        <article className="menu-item">
          <div className="menu-img placeholder">
            <img
              src="/menu/brushetta.jpg"
              alt="Brushetta"
              className="menu-img"
            />
          </div>
          <div className="menu-content">
            <h3>Bruschetta</h3>
            <p>
              Grilled bread topped with garlic, olive oil, and seasoned tomatoes.
            </p>
            <span className="price">$8.99</span>
          </div>
        </article>

        <article className="menu-item">
          <div className="menu-img placeholder">
            <img
              src="/menu/lemon-chicken.jpg"
              alt="Lemon Chicken"
              className="menu-img"
            />
          </div>
          <div className="menu-content">
            <h3>Lemon Chicken</h3>
            <p>
              Juicy grilled chicken marinated in lemon, herbs, and olive oil.
            </p>
            <span className="price">$16.99</span>
          </div>
        </article>

        <article className="menu-item">
          <img
            src="/menu/pasta.jpg"
            alt="Pasta"
            className="menu-img"
          />

          <div className="menu-content">
            <h3>Pasta</h3>
            <p>
              Tangy lemon filling topped with light, fluffy meringue on a crisp crust.
            </p>
            <span className="price">$18.99</span>
          </div>
        </article>
        
        <article className="menu-item">
          <div className="menu-img placeholder">
            <img
              src="/menu/lemon-pie.jpg"
              alt="Lemon Meringue Pie"
              className="menu-img"
            />
          </div>
          <div className="menu-content">
            <h3>Lemon Meringue Pie</h3>
            <p>
              A delicious lemon meringue pie straight from grandma’s recipe book.
            </p>
            <span className="price">$6.99</span>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Menu;

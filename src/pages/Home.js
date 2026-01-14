import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <main>
      <section className="hero">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button onClick={() => navigate("/booking")}>
            Reserve a Table
          </button>
        </div>

        <div className="hero-image">
          <div className="image-placeholder">
            <img
                src="/menu/herooo.jpg"
                alt="Greek Salad"
                className="image-placeholder"
              />
          </div>
        </div>
      </section>

      <section className="specials">
        <h2 className="section-title">This week’s specials!</h2>

        <div className="cards">
          <article className="card">
            <div className="image-placeholder">
              <img
                src="/menu/greek-salad.jpg"
                alt="Greek Salad"
                className="image-placeholder"
              />
            </div>
            <h3>Greek Salad</h3>
            <p>Fresh lettuce, olives, feta cheese, and crunchy garlic croutons.</p>
          </article>

          <article className="card">
            <div className="image-placeholder">
              <img
                src="/menu/brushetta.jpg"
                alt="Brushetta"
                className="image-placeholder"
              />
            </div>
            <h3>Bruschetta</h3>
            <p>Grilled bread topped with garlic and seasoned tomatoes.</p>
          </article>

          <article className="card">
            <div className="image-placeholder">
              <img
                src="/menu/grilled-fishhhh.jpg"
                alt="Greek Salad"
                className="image-placeholder"
              />
            </div>
            <h3>Grilled Fish</h3>
            <p>Fresh fish grilled to perfection with herbs, olive oil, and a hint of lemon.</p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Home;

import { Link } from "react-router-dom";

function Header({ isLoggedIn, onLoginClick, onLogoutClick }) {
  return (
    <header className="header">
      <Link to="/" className="logo-text">
        <img
          src="/little-lemon.jpg"
          alt="Little Lemon logo"
          className="logo"
        />
      </Link>

      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/menu" className="nav-link">Menu</Link>
          </li>
          <li>
            <Link to="/booking" className="nav-link">Reservations</Link>
          </li>
          <li>
            <Link to="/order" className="nav-link">Order Online</Link>
          </li>
          <li
            onClick={() =>
              isLoggedIn ? onLogoutClick() : onLoginClick()
            }
          >
            {isLoggedIn ? "Logged In" : "Login"}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

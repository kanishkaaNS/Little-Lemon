import { useState } from "react";

function LoginModal({ onClose, onLogin }) {
  const [mode, setMode] = useState("login"); // login | register
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || (mode === "register" && !name)) {
      alert("Please fill in all required fields.");
      return;
    }

    onLogin(); // fake login success
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <h2 className="section-title">
          {mode === "login" ? "Login" : "Register"}
        </h2>

        <p>
          {mode === "login"
            ? "Please log in to confirm your reservation."
            : "Create an account to confirm your reservation."}
        </p>

        <form onSubmit={handleSubmit}>
          {mode === "register" && (
            <>
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </>
          )}

          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            {mode === "login" ? "Login" : "Register"}
          </button>
        </form>

        <p className="switch-text">
          {mode === "login" ? (
            <>
              Don’t have an account?{" "}
              <span onClick={() => setMode("register")}>Register</span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span onClick={() => setMode("login")}>Login</span>
            </>
          )}
        </p>

        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
      </div>
    </div>
  );
}

export default LoginModal;

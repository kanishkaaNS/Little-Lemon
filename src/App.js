import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import BookingPage from "./pages/BookingPage";
import LoginModal from "./components/LoginModal";
import LogoutConfirmModal from "./components/LogoutConfirmModal";
import "./styles/style.css";
import Menu from "./pages/Menu.js";
import OrderOnline from "./pages/OrderOnline";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  return (
    <HashRouter>
      <Header
        isLoggedIn={isLoggedIn}
        onLoginClick={() => setShowLoginModal(true)}
        onLogoutClick={() => setShowLogoutConfirm(true)}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<OrderOnline />} />

        <Route
          path="/booking"
          element={
            <BookingPage
              isLoggedIn={isLoggedIn}
              onRequireLogin={() => setShowLoginModal(true)}
            />
          }
        />
      </Routes>

      {showLoginModal && (
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          onLogin={() => {
            setIsLoggedIn(true);
            setShowLoginModal(false);
          }}
        />
      )}

      {showLogoutConfirm && (
        <LogoutConfirmModal
          onConfirm={() => {
            setIsLoggedIn(false);
            setShowLogoutConfirm(false);
          }}
          onCancel={() => setShowLogoutConfirm(false)}
        />
      )}
    </HashRouter>
  );
}

export default App;

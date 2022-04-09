import React from "react";

// React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import RegisterDriverPage from "./pages/RegisterDriverPage";
import BookPage from "./pages/BookPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/forgot_password" element={<ForgotPasswordPage />} />
        <Route exact path="/register_driver" element={<RegisterDriverPage />} />
        <Route exact path="/book" element={<BookPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

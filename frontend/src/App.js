// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import BookingPage from "./pages/BookingPage/BookingPage";
import PaymentPage from "./pages/Payment/PaymentPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import AboutPage from "./pages/About/About";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/bookings" element={<BookingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/packages" element={<PaymentPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

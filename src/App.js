import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/Aboutpage";
import MenuPage from "./pages/MenuPage";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./pages/ConfirmedBooking";
import OrderOnline from "./pages/OrderOnline";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route
            path="/confirmed"
            element={<ConfirmedBooking />}
          />
          <Route
            path="/order-online"
            element={<OrderOnline />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
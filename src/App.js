import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import"./App.css";
import BookingPage from "./pages/BookingPage";
import AboutPage from "./pages/Aboutpage";
import MenuPage from "./pages/MenuPage";
import OrderOnlinePage from "./pages/OrderOnline";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      <Route path="/about" element={<AboutPage />} />
     <Route path="/menu" element={<MenuPage />}/>
      <Route path="/order-online" element={<OrderOnlinePage />}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
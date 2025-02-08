import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutPage from "./components/About";
import NotFoundPage from "./components/404";
import ProductPage from "./components/AllProducts";
import HomePage from "./pages/Home";

import "../public/css/main.css";
import "../public/css/util.css";
import ProductDetail from "./components/ProductDetails";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product-details" element={<ProductDetail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
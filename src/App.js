import './App.css';
import Contact from './Pages/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Blog from './Pages/Blog'
import { Routes, Route } from "react-router-dom";
import Shop from './Pages/Shop';
import Category from './Pages/Category';
import Item from './components/description/Item';
import About from './Pages/About'
import AddtoCart from './components/cart/AddtoCart';
import Policy from './Pages/Policy';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/description" element={<Item />} />
        <Route path="/checkout" element={<AddtoCart />} />
        <Route path="/PrivacyPolicy" element={<Policy />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;

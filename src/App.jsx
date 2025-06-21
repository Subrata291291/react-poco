import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchProvider } from './context/SearchContext';


import './assets/css/main.css';
import './assets/css/animation.css';

import AOS from 'aos';
import Header from './components/Header';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import SingleProduct from './pages/SingleProduct';
import ThankYou from './pages/ThankYou';
import SingleBlog from './pages/SingleBlog';

import CommonBanner from './components/CommonBanner';
import Footer from './components/Footer';

import { CartProvider } from './components/AddToCart';




// 🔁 Layout handles banner logic + routes
const Layout = () => {
  const location = useLocation();
  const showBanner = location.pathname !== '/';

  return (
    <>
      <Header />
      {showBanner && <CommonBanner />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thankyou" element={<ThankYou/>} />
        <Route path="/blog/:id" element={<SingleBlog />} />
      </Routes>
      <Footer />
    </>
  );
};

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-back",
      once: true,
    });
  }, []);

  return (
    <SearchProvider>
    <CartProvider>
      <BrowserRouter>
        <Layout />
        {/* ✅ Global Toast Container placed outside Layout */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </BrowserRouter>
    </CartProvider>
    </SearchProvider>
  );
}

export default App;

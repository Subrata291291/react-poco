import React, { useContext } from 'react';
import logo from '../assets/images/logo_svg.svg';
import { Link } from 'react-router-dom';
import { CartContext } from './AddToCart';
import { SearchContext } from '../context/SearchContext';
import { useNavigate, useLocation } from 'react-router-dom';
import productsData from '../data/products';

const Header = () => {

  const topProducts = productsData
  .sort((a, b) => b.rating - a.rating) // sort by rating or popularity
  .slice(0, 8);

  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);

  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.pathname !== '/shop') {
      navigate('/shop');
    }
  };

  return (
    <header className="main-header">
      {/* Top Bar */}
      <section className="top-bar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-5 col-lg-4 col-xl-3 order-1 order-md-1">
              <div className="top-left d-none d-sm-block">
                <ul className="d-flex align-items-center justify-content-center justify-content-md-between text-white">
                  <li>
                    <Link to="#"><p><span><i className="fa-solid fa-location-dot"></i></span> Find Our Store</p></Link>
                  </li>
                  <li className="gap">|</li>
                  <li>
                    <Link to="#"><p><span><i className="fa-solid fa-truck"></i></span> Order Tracking</p></Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4 col-xl-6 order-3 order-md-2">
              <div className="top-middle text-center">
                <p>100% Secure delivery without contacting the courier</p>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-4 col-xl-3 order-2 order-md-3">
              <div className="top-right d-none d-sm-block">
                <ul className="d-flex align-items-center justify-content-center my-1 justify-content-md-end">
                  <li><Link to="#"><i className="fa-brands fa-facebook"></i></Link></li>
                  <li><Link to="#"><i className="fa-brands fa-square-x-twitter"></i></Link></li>
                  <li><Link to="#"><i className="fa-brands fa-square-youtube"></i></Link></li>
                  <li><Link to="#"><i className="fa-brands fa-square-instagram"></i></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Middle Area */}
      <section className="middle-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-4">
              <div className="middle-left d-none d-md-block">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
              </form>
              </div>
            </div>
            <div className="col-4">
              <div className="middle-center text-center">
                <Link to="/"><img src={logo} alt="Logo" /></Link>
              </div>
            </div>
            <div className="col-4">
              <div className="middle-right d-none d-lg-block">
                <div className="row align-items-center">
                  <div className="col-6">
                    <div className="top-contact">
                      <p className="support-text"><span><i className="fa-solid fa-phone"></i></span> 24/7 Support center</p>
                      <p className="call-text">+1 718-904-4450</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="login-box">
                      <ul className="d-flex align-items-center justify-content-end">
                        <li><Link to="" data-bs-toggle="modal" data-bs-target="#loginmodal"><i className="fa-solid fa-user"></i></Link></li>
                        <li>
                          <Link to="/cart" className="position-relative">
                            <i className="fa-solid fa-basket-shopping"></i>
                            <span id="count" className="position-absolute">{totalItems}</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Header Nav */}
      <section className="header-area text-center">
        <div className="container">
          <nav className="navbar navbar-expand-lg justify-content-center d-none d-lg-block">
            <div id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto w-100">
                <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
                <li className="nav-item dropdown">
                  <Link className="nav-link mega-menu">Menu <span><i class="fa-solid fa-angle-down"></i></span></Link>
                  <ul className="dropdown-menu p-3">
                  <div className="row">
                    {topProducts.map(product => (
                      <div className="col-3 mb-3" key={product.id}>
                        <Link className="dropdown-item p-2 d-flex align-items-center" to={`/product/${product.id}`}>
                          <img
                            src={product.image}
                            alt={product.title}
                            className="me-2"
                            style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '6px' }}
                          />
                          <span style={{ fontSize: '14px' }}>{product.title}</span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </ul>
                </li>
                <li className="nav-item"><Link className="nav-link" to="/shop">Shop</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Mobile Area */}
        <section className="mob-area">
          <div className="container position-relative">
            <div className="d-lg-none">
              <div className="row">
                <div className="col-12">
                  <div className="mob-menu">
                    <div className="top-btns text-center">
                      <div className="middle-right">
                        <div className="row align-items-center">
                          <div className="col-6">
                            <div className="top-contact">
                              <p className="support-text"><span><i className="fa-solid fa-phone"></i></span> 24/7 Support center</p>
                              <p className="call-text">+1 718-904-4450</p>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="login-box">
                              <ul className="d-flex align-items-center justify-content-center">
                                <li><Link to="" data-bs-toggle="modal" data-bs-target="#loginmodal"><i className="fa-solid fa-user"></i></Link></li>
                                <li>
                                  <Link to="/cart" className="position-relative">
                                    <i className="fa-solid fa-basket-shopping"></i>
                                    <span id="count" className="position-absolute">{totalItems}</span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a className="toggle-btn" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                        <i className="fa-solid fa-bars"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="logo-mb text-center"></div>
                </div>

                {/* Offcanvas */}
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                  <div className="offcanvas-header">
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div className="offcanvas-body">
                    <nav className="navbar navbar-expand-md d-block">
                      <ul className="navbar-nav mx-auto">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/shop">Shop</Link></li>
                        <li className="nav-item dropdown position-relative">
                          <Link className="nav-link mega-menu dropdown-toggle d-flex justify-content-between" to="#" data-bs-toggle="dropdown">Blog <i class="fa-solid fa-angle-down"></i></Link>
                          <ul className="dropdown-menu p-md-0 p-lg-2 d-lg-flex align-items-center justify-content-between">
                            <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
                          </ul>
                        </li>
                        <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                      </ul>
                    </nav>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </section>
    </header>
  );
};

export default Header;

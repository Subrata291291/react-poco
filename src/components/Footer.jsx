import React from 'react';
import { Link } from 'react-router-dom';
import Gallery from './Gallery';
import logo from '../assets/images/logo_svg.svg'
import visa from '../assets/images/visa.png'

const Footer = () => {
  // Only include actual page routes from the 'pages' folder
  const pageLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
    <Gallery/>
    <footer className="footer-area">
      <div className="container">
        <div className="footer-logo text-center mb-4">
          <img src={logo} alt="Logo" />
        </div>

        <div className="row">
          {/* Newsletter Section */}
          <div className="col-lg-4">
            <div className="footer-left">
              <h3>Newsletter</h3>
              <p>
                Subscribe & get <span>10%</span> discount. Get E-mail updates about our latest shop and{' '}
                <span>special offers</span>.
              </p>
              <form>
                <input type="email" placeholder="Your Email..." required className="w-100" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 custom-border">
            <div className="footer-middle text-center">
              <p><span>Address:</span> 570 8th Ave, New York, NY 10018 United States</p>
              <a href="tel:+17189044450">+1 718-904-4450</a>
              <p className="footer-mail">customer_support@example.com</p>
            </div>
          </div>

          {/* Dynamic Page Links */}
          <div className="col-lg-4">
            <div className="footer-right">
              <div className="row">
                <div className="col-6">
                  <h3>Pages</h3>
                  <ul>
                    {pageLinks.map((page, index) => (
                      <li key={index}>
                        <Link to={page.path}>{page.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-6">
                  <h3>Pages</h3>
                  <ul>
                    {pageLinks.map((page, index) => (
                      <li key={index}>
                        <Link to={page.path}>{page.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom mt-4 py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p>
                Copyright © {new Date().getFullYear()} <span>pocofood</span>. All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-end">
              <div className="footer-bottom-right">
                <img src={visa} alt="Visa" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel"></h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/vp_IJ1kl9PE?si=VsC1cmOfCFFQBNhX" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade" id="loginmodal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div class="form-box">
              {/* <!-- Tabs --> */}
              <ul className="nav nav-tabs mb-4" id="authTab" role="tablist">
                <li className="nav-item w-50 text-center" role="presentation">
                  <button className="nav-link active w-100" id="login-tab" data-bs-toggle="tab" data-bs-target="#login" type="button" role="tab">Login</button>
                </li>
                <li className="nav-item w-50 text-center" role="presentation">
                  <button className="nav-link w-100" id="signup-tab" data-bs-toggle="tab" data-bs-target="#signup" type="button" role="tab">Sign Up</button>
                </li>
              </ul>

              {/* <!-- Tab Contents --> */}
              <div className="tab-content" id="authTabContent">
                {/* <!-- Login Form --> */}
                <div className="tab-pane fade show active" id="login" role="tabpanel">
                  <form>
                    <div className="mb-5 mt-5 input-group">
                      <span className="input-group-text">@</span>
                      <input type="email" className="form-control" placeholder="Email" required />
                    </div>
                    <div className="mb-5 input-group">
                      <span className="input-group-text">🔑</span>
                      <input type="password" class="form-control" placeholder="Password" required />
                    </div>
                    <button type="submit" class="btn btn-dark w-100">Login</button>
                  </form>
                </div>

                {/* <!-- Signup Form --> */}
                <div className="tab-pane fade" id="signup" role="tabpanel">
                  <form>
                    <div className="mb-5 mt-5 input-group">
                      <span className="input-group-text">@</span>
                      <input type="email" class="form-control" placeholder="Email" required />
                    </div>
                    <div className="row mb-5">
                      <div className="col input-group">
                        <span className="input-group-text">👤</span>
                        <input type="text" class="form-control" placeholder="First Name" required />
                      </div>
                      <div className="col input-group">
                        <span className="input-group-text">👤</span>
                        <input type="text" class="form-control" placeholder="Last Name" required />
                      </div>
                    </div>
                    <div className="mb-5 input-group">
                      <span className="input-group-text">🔑</span>
                      <input type="password" class="form-control" placeholder="Password" required />
                    </div>
                    <div className="mb-5 input-group">
                      <span className="input-group-text">🔑</span>
                      <input type="password" class="form-control" placeholder="Confirm Password" required />
                    </div>
                    <div className="form-check terms-txt">
                      <input className="form-check-input" type="checkbox" id="terms" required />
                      <label className="form-check-label" for="terms">
                        I accept the Terms of Service and Privacy Policy
                      </label>
                    </div>
                    <button type="submit" class="btn btn-dark w-100">Sign Up</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;

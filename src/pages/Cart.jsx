import React, { useContext } from 'react';
import { CartContext } from '../components/AddToCart';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(CartContext);

  const navigate = useNavigate();

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2,
    }).format(price);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + Number(item.retailprice) * item.qty,
    0
  );

  return (
    <section className="cart-area py-5">
      <div className="container">
        <div className="row gx-lg-5">
          {/* LEFT COLUMN - CART ITEMS */}
          <div className="col-md-8">
            <div className="product-details-left">
              <div className="product-heading mb-4">
                <ul className="d-flex justify-content-between">
                  <li><h4>PRODUCT</h4></li>
                  <li className="d-none d-md-block"><h4>TOTAL</h4></li>
                </ul>
              </div>

              <div className="product-details-box">
                {cartItems.length === 0 ? (
                  <div className="text-left">
                    <h5 className="text-muted mb-3">Your cart is empty.</h5>
                    <button
                      className="btn btn-dark"
                      style={{ fontSize: '1.2rem', padding: '0.75rem 1.5rem' }}
                      onClick={() => navigate('/shop')}
                    >
                      Shop Now
                    </button>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div className="row cart-item mb-4" key={item.id}>
                      <div className="col-md-6">
                        <div className="product-price-details">
                          <div className="row">
                            <div className="col-3">
                              <div
                                className="product-pic"
                                style={{ cursor: 'pointer' }}
                                onClick={() => navigate(`/product/${item.id}`)}
                              >
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                            <div className="col-9">
                              <div className="product-price-details">
                                <h4
                                  className="product-title"
                                  style={{ cursor: 'pointer' }}
                                  onClick={() => navigate(`/product/${item.id}`)}
                                >
                                  {item.title}
                                </h4>
                                <h5 className="product-price mt-2">
                                  {formatPrice(item.retailprice)}
                                </h5>
                              </div>
                              <div className="quantity-wrapper mt-3">
                                <div className="quantity-selector">
                                  <button
                                    className="qty-btn minus"
                                    onClick={() => decreaseQuantity(item.id)}
                                    disabled={item.qty === 1}
                                  >
                                    -
                                  </button>
                                  <span className="qty-value">{item.qty}</span>
                                  <button
                                    className="qty-btn plus"
                                    onClick={() => increaseQuantity(item.id)}
                                  >
                                    +
                                  </button>
                                </div>
                                <div>
                                  <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="remove-item text-danger mt-3 btn btn-link p-0"
                                    style={{ fontSize: '0.95rem' }}
                                  >
                                    Remove item
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* TOTAL PER ITEM */}
                      <div className="col-md-6 d-none d-md-block">
                        <div className="product-details-cart-total text-end pe-4">
                          <h5 className="product-price mt-3">
                            {formatPrice(item.retailprice * item.qty)}
                          </h5>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - TOTAL */}
          <div className="col-md-4">
            <div className="product-cart-total border p-4 rounded shadow-sm">
              <h3 className="cart-total mb-4">CART TOTALS</h3>
              <ul className="d-flex justify-content-between mb-2">
                <li><h5>Subtotal</h5></li>
                <li><h6 className="subtotal-price">{formatPrice(subtotal)}</h6></li>
              </ul>
              <ul className="d-flex justify-content-between mb-4">
                <li><h5><b>TOTAL</b></h5></li>
                <li><h6 className="total-price">{formatPrice(subtotal)}</h6></li>
              </ul>
              {cartItems.length > 0 && (
                <button
                  className="w-100 btn btn-dark"
                  onClick={() => navigate('/checkout')}
                >
                  PROCEED TO CHECKOUT
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;

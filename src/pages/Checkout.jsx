import React, { useContext, useState } from 'react';
import { CartContext } from '../components/AddToCart';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [validated, setValidated] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState('');
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + Number(item.retailprice) * item.qty,
    0
  );

  const total = subtotal - discount;

  const validCoupons = [
    { code: 'SAVE10', discount: 10 },
    { code: 'FOOD50', discount: 50 },
    { code: 'MEAL100', discount: 100 },
    { code: 'BULK150', discount: 150 },
    { code: 'SUPER200', discount: 200 }
  ];

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2,
    }).format(price);

  const handleCouponApply = (e) => {
    e.preventDefault();
    const found = validCoupons.find(c => c.code.toLowerCase() === couponCode.toLowerCase());
    if (found) {
      setDiscount(found.discount);
      setCouponMessage(`Coupon applied: ₹${found.discount} off`);
    } else {
      setDiscount(0);
      setCouponMessage('Invalid coupon code');
    }
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);

    if (form.checkValidity()) {
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      const orderData = {
        customer: data,
        order: cartItems,
        subtotal,
        discount,
        total,
        payment: data.payment,
        date: new Date().toLocaleDateString(),
        orderId: Math.floor(1000 + Math.random() * 9000),
      };

      navigate('/thankyou', { state: orderData });
      clearCart(); // ✅ Clear cart only after successful navigation
    }
  };

  return (
    <div>
      <section className="checkout-area">
        <div className="container">
          <div className="row gx-lg-5">
            {/* LEFT SIDE */}
            <div className="col-lg-8 order-2 order-md-2 order-lg-1">
              <div className="checkout-left">
                <form
                  className={`checkout-form needs-validation ${validated ? 'was-validated' : ''}`}
                  noValidate
                  onSubmit={handleSubmit}
                >
                  {/* Contact Info */}
                  <div className="contact-information">
                    <h3>Contact information</h3>
                    <p className="mb-4 mt-2">We'll use this email to send you order updates.</p>
                    <div className="input-group has-validation">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        required
                        placeholder="Email Address"
                      />
                      <div className="invalid-feedback">Please provide a valid email.</div>
                    </div>
                  </div>

                  {/* Billing */}
                  <div className="billing-address row">
                    <h3>Billing address</h3>
                    <p className="mb-4 mt-2">Enter your billing address below.</p>
                    <div className="col-md-6 mb-4">
                      <input type="text" name="firstname" className="form-control" placeholder="John" required />
                      <div className="invalid-feedback">Please enter first name.</div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <input type="text" name="lastname" className="form-control" placeholder="Doe" required />
                      <div className="invalid-feedback">Please enter last name.</div>
                    </div>
                    <div className="col-md-12 mb-4">
                      <input type="text" name="address" className="form-control" placeholder="Address" required />
                      <div className="invalid-feedback">Please enter address.</div>
                    </div>
                    <div className="col-md-12 mb-4">
                      <input type="text" name="apartment" className="form-control" placeholder="Apartment (optional)" />
                    </div>
                    <div className="col-md-6 mb-4">
                      <input type="text" name="city" className="form-control" placeholder="City" required />
                      <div className="invalid-feedback">Please enter a city.</div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <select className="form-select" name="state" required>
                        <option disabled value="">State</option>
                        <option value="West Bengal">West Bengal</option>
                      </select>
                      <div className="invalid-feedback">Please select a state.</div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <input type="tel" name="pin" className="form-control" placeholder="Pin Code" required />
                      <div className="invalid-feedback">Please enter pin code.</div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <input type="tel" name="phone" className="form-control" placeholder="Phone" required />
                      <div className="invalid-feedback">Please enter phone number.</div>
                    </div>
                  </div>

                  {/* Payment */}
                  <div className="payment-method">
                    <h3>Payment Method</h3>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="payment" id="payment-cod" value="Cash on delivery" defaultChecked />
                      <label className="form-check-label" htmlFor="payment-cod">
                        Cash on delivery
                      </label>
                      <p className="cash-content">Pay with cash when product arrives.</p>
                    </div>
                  </div>

                  <div className="col-12">
                    <button className="submit-btn" type="submit">Pay Now</button>
                  </div>
                </form>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-4 order-1 order-md-1 order-lg-2">
              <div className="checkout-right">
                <div className="order-summary">
                  <p className="oreder-summary-title">Order Summary</p>

                  <form className="row g-2 coupon-area" onSubmit={handleCouponApply}>
                    <div className="col-8">
                      <input
                        className="form-control"
                        placeholder="Enter coupon code"
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                      />
                    </div>
                    <div className="col-4">
                      <button type="submit" className="coupon-btn btn-dark btn w-100">Apply</button>
                    </div>
                    {couponMessage && (
                      <div className="col-12 mt-2">
                        <small style={{ color: discount > 0 ? 'green' : 'red' }}>{couponMessage}</small>
                      </div>
                    )}
                  </form>

                  <ul>
                    {cartItems.map((item) => (
                      <li key={item.id}>
                        <div className="row">
                          <div className="col-8">
                            <ul className="d-flex order-box">
                              <li>
                                <div className="order-pic position-relative">
                                  <img src={item.image} alt={item.title} width="50px" />
                                  <span className="position-absolute">{item.qty}</span>
                                </div>
                              </li>
                              <li>
                                <div className="order-details">
                                  <p>{item.title}</p>
                                  <h3>{formatPrice(item.retailprice)}</h3>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="col-4">
                            <div className="total-checkout-price" style={{ float: 'right' }}>
                              <h3>{formatPrice(item.retailprice * item.qty)}</h3>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}

                    <li className="mt-2">
                      <div className="row">
                        <div className="col-6"><p>Subtotal</p></div>
                        <div className="col-6"><h3 style={{ float: 'right' }}>{formatPrice(subtotal)}</h3></div>
                      </div>
                    </li>

                    {discount > 0 && (
                      <li>
                        <div className="row">
                          <div className="col-6"><p>Discount</p></div>
                          <div className="col-6"><h3 style={{ float: 'right', color: 'green' }}>- {formatPrice(discount)}</h3></div>
                        </div>
                      </li>
                    )}

                    <li>
                      <div className="row">
                        <div className="col-6"><h2><b>Total</b></h2></div>
                        <div className="col-6"><h3 style={{ float: 'right' }}>{formatPrice(total)}</h3></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;

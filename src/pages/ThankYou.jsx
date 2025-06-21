import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    navigate('/');
    return null;
  }

  const { customer, order, subtotal, discount, total, payment, date, orderId } = state;

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2,
    }).format(price);

  return (
    <div>
      <section className="thank-you-area p-70">
        <div className="container">
          <div className="order-message">
            <p className="thank-you-txt">Thank you, {customer.firstname} {customer.lastname}. Your order has been received.</p>
            <ul className="d-flex mt-4" style={{ flexWrap: 'wrap', gap: '2rem' }}>
              <li><p>Order Number:</p><h4>{orderId}</h4></li>
              <li><p>Date:</p><h4>{date}</h4></li>
              <li><p>Total:</p><h4>{formatPrice(total)}</h4></li>
              <li><p>Payment method:</p><h4>{payment}</h4></li>
            </ul>
          </div>

          <div className="customer-order-details">
            <h3 className="mb-3">Order Details</h3>
            <table className="table">
              <thead className="thead-dark">
                <tr><th scope="col">Products</th><th scope="col">Total</th></tr>
              </thead>
              <tbody>
                {order.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title} × {item.qty}</td>
                    <td>{formatPrice(item.retailprice * item.qty)}</td>
                  </tr>
                ))}
                <tr><td>Subtotal :</td><td>{formatPrice(subtotal)}</td></tr>
                {discount > 0 && <tr><td>Discount :</td><td>- {formatPrice(discount)}</td></tr>}
                <tr><td>Payment Method :</td><td>{payment}</td></tr>
                <tr><td><b>Total :</b></td><td><b>{formatPrice(total)}</b></td></tr>
              </tbody>
            </table>
          </div>

          <div className="billing-address">
            <h3 className="mb-3">Billing Information</h3>
            <div className="billing-box">
              <ul>
                <li><p><b>Name :</b> {customer.firstname} {customer.lastname}</p></li>
                <li><p><b>Address :</b> {customer.address}</p></li>
                <li><p><b>Apartments :</b> {customer.apartment || '-'}</p></li>
                <li><p><b>State :</b> {customer.state}</p></li>
                <li><p><b>Pin :</b> {customer.pin}</p></li>
                <li><p><b>Phone :</b> {customer.phone}</p></li>
                <li><p><b>Email :</b> {customer.email}</p></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThankYou;

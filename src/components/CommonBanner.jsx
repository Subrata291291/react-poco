import React from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import productsData from '../data/products'; // adjust this path if needed

const CommonBanner = () => {
  const location = useLocation();
  const { id } = useParams();

  const getTitleAndBreadcrumb = () => {
    const path = location.pathname;
  
    if (path === '/') return { title: 'Home', breadcrumb: 'Home' };
    if (path === '/shop') return { title: 'Our Shop', breadcrumb: 'Shop' };
    if (path === '/blog') return { title: 'Our Blog', breadcrumb: 'Blog' };
    if (path.startsWith('/blog/')) return { title: 'Our Blog', breadcrumb: 'Single Blog' };
    if (path === '/contact') return { title: 'Contact Us', breadcrumb: 'Contact' };
    if (path === '/cart') return { title: 'Cart', breadcrumb: 'Cart' };
    if (path === '/checkout') return { title: 'Checkout', breadcrumb: 'Checkout' };
    if (path === '/thankyou') return { title: 'Thank You', breadcrumb: 'Thank you' };
  
    if (path.startsWith('/product/')) {
      const product = productsData.find(p => p.id === Number(id));
      return {
        title: product ? product.title : 'Product Details',
        breadcrumb: 'Single Product',
      };
    }
  
    return { title: 'Page Not Found', breadcrumb: '404' };
  };
  

  const { title, breadcrumb } = getTitleAndBreadcrumb();

  return (
    <section className="common-banner">
      <div className="container text-center">
        <h1>{title}</h1>
        <nav className="breadcrumb">
          <ul className="d-flex align-items-center justify-content-center list-unstyled gap-4">
            <li><Link to="/">Home</Link></li>
            <li>/</li>
            <li>{breadcrumb}</li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default CommonBanner;

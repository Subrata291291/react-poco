import React, { useContext } from 'react';
import Slider from 'react-slick';
import { toast } from 'react-toastify';
import products from '../data/products';
import { CartContext } from './AddToCart'; 
import { useNavigate } from 'react-router-dom';
import renderStars from '../utils/renderStars';
import bibimbap from '../assets/images/bibimbap.png';
import animated1 from '../assets/images/animated-pic.png';
import animated2 from '../assets/images/animated-pic1.png';

const PopularProducts = () => {
  const { addToCart, cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const handleAddToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    addToCart(product);

    if (exists) {
      toast.info(`${product.title} quantity updated`, {
        toastId: `update-${product.id}`,
      });
    } else {
      toast.success(`${product.title} added to cart`, {
        toastId: `add-${product.id}`,
      });
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 2, dots: true } },
    ],
  };

  const formatPrice = (price) => `₹${price.toFixed(2)}`;

  return (
    <section className="popular-area p-70" data-aos="fade-up">
      <div className="container">
        <div className="title-box text-center">
          <h3>
            <span><img src={bibimbap} alt="" /></span> Best food 
            <span><img src={bibimbap} alt="" /></span>
          </h3>
          <h5>Popular Food Items</h5>
        </div>

        <Slider {...settings} className="popular_slider">
          {products.slice(0, 12).map((item) => {
            const hasDiscount = item.saleprice && item.saleprice < item.retailprice;
            const discountPercent = hasDiscount
              ? Math.round(((item.retailprice - item.saleprice) / item.retailprice) * 100)
              : null;

            return (
              <div key={item.id} className="popular-box text-center p-3">
                <div className="popular-pic position-relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ cursor: 'pointer' }}
                    onClick={() => navigate(`/product/${item.id}`)}
                  />
                  {hasDiscount && (
                    <span className="discount-text position-absolute top-0 end-0 bg-danger text-white px-2 py-1 rounded" style={{ fontSize: '12px' }}>
                      {discountPercent}% OFF
                    </span>
                  )}
                </div>
                <div className="popular-content">
                  <div className="rating mb-4">{renderStars(item.rating || 4.5)}</div>
                  <h4 style={{ cursor: 'pointer' }} onClick={() => navigate(`/product/${item.id}`)}>{item.title}</h4>
                  <p className='text-truncate'>{item.description}</p>
                  <div className="price mb-2">
                    {hasDiscount ? (
                      <>
                        <span className="fw-bold text-success">{formatPrice(item.saleprice)}</span>{' '}
                        <span className="text-muted text-decoration-line-through ms-2">{formatPrice(item.retailprice)}</span>
                      </>
                    ) : (
                      <span className="fw-bold">{formatPrice(item.retailprice)}</span>
                    )}
                  </div>
                  <button
                    className="cart-icon btn btn-sm btn-outline-dark m-0"
                    onClick={() => handleAddToCart(item)}
                  >
                    <i className="fa-solid fa-basket-shopping me-1"></i> Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </Slider>

        {/* Decorative Images */}
        <img src={animated1} alt="" className="animated1 position-absolute" />
        <img src={animated2} alt="" className="animated2 position-absolute" />
      </div>
    </section>
  );
};

export default PopularProducts;

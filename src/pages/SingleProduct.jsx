import React, { useEffect, useState, useContext, useRef } from 'react';
import Slider from 'react-slick';
import { useParams } from 'react-router-dom';
import productsData from '../data/products';
import { CartContext } from '../components/AddToCart';
import renderStars from '../utils/renderStars';
import { toast } from 'react-toastify';

const SingleProduct = () => {
  const { id } = useParams();
  const { addToCart, removeFromCart, cartItems } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const sliderFor = useRef(null);
  const sliderNav = useRef(null);

  useEffect(() => {
    const selectedProduct = productsData.find((item) => item.id === Number(id));
    setProduct(selectedProduct);
  }, [id]);

  if (!product) return <div className="text-center py-5">Product not found</div>;

  const handleQuantityChange = (type) => {
    setQuantity((prev) => (type === 'increase' ? prev + 1 : Math.max(prev - 1, 1)));
  };
  

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast.success(`${product.title} added to cart (${quantity})`, {
    toastId: `add-${product.id}`
  });

  };

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  const cartItem = cartItems.find((item) => item.id === product.id);
  const effectivePrice = Number(product.saleprice) || Number(product.retailprice);

  const sliderForSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: sliderNav.current,
  };

  const sliderNavSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: sliderFor.current,
    dots: true,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
  };

  return (
    <div className="single-products-area p-70">
      <div className="container">
        <div className="row gx-lg-5">
          {/* Slider */}
          <div className="col-md-5">
            <div className="single-products-left">
              {/* Main Product Slider */}
              <Slider
                {...sliderForSettings}
                ref={sliderFor}
                className="slider-for"
              >
                {[...Array(4)].map((_, i) => (
                  <div key={i}>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="img-fluid main-product"
                    />
                  </div>
                ))}
              </Slider>

              {/* Thumbnail Slider */}
              <Slider
                {...sliderNavSettings}
                ref={sliderNav}
                className="slider-nav mt-5"
              >
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="px-2">
                    <img
                      src={product.image}
                      alt={`Thumbnail ${i + 1}`}
                      className="img-fluid border rounded gallery-pic p-4"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          {/* Product Details */}
          <div className="col-md-7">
            <div className="single-products-right">
              <h3 className="mb-3">{product.title}</h3>

              <div className="price-box">
                <ul className="list-unstyled">
                  <li className="star-pic mt-2 d-flex align-items-center">
                    <p  className='d-flex align-items-center'>{renderStars(product.rating)} <span className="ms-2 text-dark">({product.rating.toFixed(1)})</span></p>
                  </li>
                  <li className='d-flex'>
                    {product.saleprice && Number(product.saleprice) !== Number(product.retailprice) ? (
                      <>
                        <h5 className="text-danger me-4" style={{ textDecoration: 'line-through' }}>
                          ₹{Number(product.retailprice).toFixed(2)}
                        </h5>
                        <h5 className="text-success">₹{Number(product.saleprice).toFixed(2)}</h5>
                      </>
                    ) : (
                      <h5 className="text-success">₹{Number(product.retailprice).toFixed(2)}</h5>
                    )}
                  </li>
                </ul>
                <p className='mt-4'>{product.description}</p>
              </div>
              <div className="product-selection-box">
                <div className="quantity-wrapper">
                  <div className="quantity-selector">
                    <button className="qty-btn minus" onClick={() => handleQuantityChange('decrease')}>−</button>
                    <span className="qty-value">{quantity}</span>
                    <button className="qty-btn plus" onClick={() => handleQuantityChange('increase')}>+</button>
                  </div>
                  <div className="add-cart-btn">
                    <button onClick={handleAddToCart} className="btn btn-dark me-2">
                      Add to Cart
                    </button>
                    {cartItem && (
                      <button
                        onClick={handleRemove}
                        className="btn btn-outline-danger remove-btn"
                      >
                        Remove Item
                      </button>
                    )}
                  </div>
                </div>

                <div className="product-categories mt-4">
                  <strong>Category:</strong> <span>{product.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

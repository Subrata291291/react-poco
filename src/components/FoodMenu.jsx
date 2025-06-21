import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CartContext } from './AddToCart';
import products from '../data/products';
import bibimbap from '../assets/images/bibimbap.png';

const FoodMenu = () => {

    const navigate = useNavigate();

    const { addToCart, cartItems } = useContext(CartContext);

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

  // Get unique categories from products
  const categories = [...new Set(products.map(item => item.category))];
  const [activeTab, setActiveTab] = useState(categories[0]);

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  const filteredProducts = products.filter(p => p.category === activeTab);

  // Group products into chunks of 3
  const chunkProducts = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  return (
    <section className="food-menu-area p-70">
        <div className="container">
            <div className="title-box text-center" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
            <h3><span><img src={bibimbap} /></span> Our Menu <span><img src={bibimbap} /></span></h3>
            <h5>Menu that always make you fall in love</h5>
            </div>
            <div className="row">
            {/* Tabs (Left Side) */}
            <div className="col-12 col-lg-3">
                <div className="product-tab" data-aos="fade-right">
                <ul className="tabs d-flex d-lg-block justify-content-center justify-content-lg-start">
                    {categories.map((cat, index) => (
                    <li
                        key={cat}
                        className={`tab-link ${cat === activeTab ? 'current' : ''}`}
                        onClick={() => handleTabClick(cat)}
                        data-tab={cat.toLowerCase()}
                        style={{ cursor: 'pointer' }}
                    >
                        <p>
                        <span>
                            <img src={bibimbap} alt="icon" />
                        </span>
                        {cat}
                        </p>
                    </li>
                    ))}
                </ul>
                </div>
            </div>

            {/* Product Content (Right Side) */}
            <div className="col-12 col-lg-9">
                <div id={activeTab.toLowerCase()} className="tab-content current">
                <div className="menu-tab-area" data-aos="fade-left">
                    {chunkProducts(filteredProducts, 3).map((chunk, i) => (
                    <div className="food-menu-wrap" key={i}>
                        {chunk.map(product => (
                        <div className="food-menu" key={product.id}>
                            <div className="food-menu_img">
                                <img style={{ cursor: 'pointer' }} onClick={() => navigate(`/product/${product.id}`)} src={product.image} alt={product.title} />
                            </div>
                            <div className="food-menu_content">
                            <h3 className="food-menu_title">
                                <a style={{ cursor: 'pointer' }} onClick={() => navigate(`/product/${product.id}`)}>{product.title}</a>
                            </h3>
                            <p className="food-menu_desc">{product.description}</p>
                            <div className="product-rating">
                                <div className="star-rating">
                                <p>
                                    <span>
                                    {[...Array(5)].map((_, index) => (
                                        <i
                                        key={index}
                                        className={`fa-${index < Math.round(product.rating) ? 'solid' : 'regular'} fa-star`}
                                        ></i>
                                    ))}
                                    </span>{' '}
                                    {Math.floor(product.rating * 100)} Reviews
                                </p>
                                </div>
                            </div>
                            </div>
                            <span className="food-menu_price">
                                 ₹{product.saleprice || product.retailprice}
                            </span>
                            <button
  className="cart-btn"
  onClick={() => handleAddToCart(product)}
>
  <i className="fa-solid fa-basket-shopping"></i>
</button>
                        </div>
                        ))}
                    </div>
                    ))}
                    {filteredProducts.length === 0 && (
                    <p className="text-muted">No products found in this category.</p>
                    )}
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  );
};

export default FoodMenu;

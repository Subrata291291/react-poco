import React, { useContext, useState } from 'react';
import productsData from '../data/products';
import { CartContext } from '../components/AddToCart';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import renderStars from '../utils/renderStars.jsx';
import { SearchContext } from '../context/SearchContext';

const Shop = () => {
  const { addToCart, cartItems } = useContext(CartContext);
  const { searchTerm } = useContext(SearchContext);
  const navigate = useNavigate();

  const [sortOption, setSortOption] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [category, setCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const getEffectivePrice = (product) => product.saleprice ?? product.retailprice;

  // Filter + Search + Sort Logic
  let filteredProducts = productsData
    .filter(p => {
      const price = getEffectivePrice(p);
      return price >= priceRange[0] && price <= priceRange[1];
    })
    .filter(p => category === 'All' || p.category === category)
    .filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()));

  if (sortOption === 'low-high') {
    filteredProducts.sort((a, b) => getEffectivePrice(a) - getEffectivePrice(b));
  } else if (sortOption === 'high-low') {
    filteredProducts.sort((a, b) => getEffectivePrice(b) - getEffectivePrice(a));
  } else if (sortOption === 'popular') {
    filteredProducts = filteredProducts.filter(p => p.isPopular);
  }

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleAddToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    addToCart(product);
    toast[exists ? 'info' : 'success'](`${product.title} ${exists ? 'quantity updated' : 'added to cart'}`, {
      toastId: `${exists ? 'update' : 'add'}-${product.id}`,
    });
  };

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="shop-area p-70">
      <div className="container">
        <div className="row gx-lg-5">

          {/* Sidebar */}
          <div className="col-md-4">
            <div className="shop-left">

              <div className="filter-by-category mb-5">
                <h3 className="mb-4">Product Categories</h3>
                <ul>
                  {['All', 'Breakfast', 'Snack', 'Dessert', 'Lunch', 'Dinner', 'Beverage'].map((cat) => (
                    <li key={cat}>
                      <button onClick={() => { setCategory(cat); setCurrentPage(1); }}>
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="filter-by-price">
                <h3 className="mb-3">Filter by Price</h3>
                <input
                  className="w-100"
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) => {
                    setPriceRange([0, parseInt(e.target.value)]);
                    setCurrentPage(1);
                  }}
                />
                <p>Max Price: ₹{priceRange[1]}</p>
              </div>

              <div className="filter-by-rating">
                <h3 className="mb-4">Top Rated Items</h3>
                <ul>
                  {productsData
                    .filter((p) => p.rating >= 4)
                    .sort((a, b) => b.rating - a.rating)
                    .slice(0, 5)
                    .map((product) => (
                      <li key={product.id} className="mb-4 d-flex gap-3 align-items-center">
                        <img
                          src={product.image}
                          alt={product.title}
                          style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '6px' }}
                        />
                        <div>
                          <h6 className="mb-1" style={{ cursor: 'pointer' }} onClick={() => navigate(`/product/${product.id}`)}>{product.title}</h6>
                          <div className="rating mb-1">{renderStars(product.rating)}</div>
                          <p>₹{getEffectivePrice(product)}</p>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="col-md-8">
            <div className="shop-right">
              <div className="sort-by-area mb-5 d-flex justify-content-end">
                <select
                  className="form-select w-auto"
                  value={sortOption}
                  onChange={(e) => {
                    setSortOption(e.target.value);
                    setCurrentPage(1);
                  }}
                >
                  <option value="">Sort by</option>
                  <option value="popular">Popularity</option>
                  <option value="high-low">Price: High to Low</option>
                  <option value="low-high">Price: Low to High</option>
                </select>
              </div>

              <div className="row">
                {currentProducts.length > 0 ? currentProducts.map((product) => {
                  const price = getEffectivePrice(product);
                  const hasDiscount = product.saleprice && product.saleprice < product.retailprice;
                  const discountPercentage = hasDiscount
                    ? Math.round(((product.retailprice - product.saleprice) / product.retailprice) * 100)
                    : 0;

                  return (
                    <div className="col-md-6 col-lg-3 col-6" key={product.id}>
                      <div className="product-box text-center shadow mb-4 position-relative">
                        <div className="product-content">
                          <img src={product.image} alt={product.title} style={{ cursor: 'pointer' }} onClick={() => navigate(`/product/${product.id}`)} className="img-fluid" />
                          <h4 className="mt-3" style={{ cursor: 'pointer' }} onClick={() => navigate(`/product/${product.id}`)}>{product.title}</h4>
                          <div className="rating mb-2 mt-2">{renderStars(product.rating || 4.5)}</div>
                          <h5>
                            {hasDiscount && (
                              <del className="text-danger ms-2">₹{product.retailprice.toFixed(2)}</del>
                            )}
                          </h5>
                          ₹{price.toFixed(2)}
                        </div>
                        {hasDiscount && (
                          <p className="discount-txt position-absolute top-0 start-0 text-white px-2 py-1 rounded-end bg-danger">
                            -{discountPercentage}% off
                          </p>
                        )}
                        <button className="cart-icon" onClick={() => handleAddToCart(product)}>
                          <i className="fa-solid fa-basket-shopping" />
                        </button>
                      </div>
                    </div>
                  );
                }) : (
                  <div className="col-12 text-center">
                    <p>No products found.</p>
                  </div>
                )}
              </div>

              {totalPages > 1 && (
                <nav className="pagination-wrapper mt-4">
                  <ul className="pagination justify-content-center">
                    {[...Array(totalPages)].map((_, idx) => (
                      <li
                        key={idx}
                        className={`page-item ${currentPage === idx + 1 ? 'active' : ''}`}
                      >
                        <button className="page-link" onClick={() => handlePageChange(idx + 1)}>
                          {idx + 1}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Shop;

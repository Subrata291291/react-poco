import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../assets/BlogData';

const SingleBlog = () => {
  const { id } = useParams();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [displayPosts, setDisplayPosts] = useState([]);
  const [highlightedBlog, setHighlightedBlog] = useState(null);

  // Find the initial blog
  const selectedBlog = blogData.find((post) => post.id === parseInt(id));

  // Categories and Recent Posts
  const categories = [...new Set(blogData.map((post) => post.category))];
  const recentPosts = [...blogData].slice(-3).reverse();

  // On initial load or when `id` changes
  useEffect(() => {
    if (selectedBlog) {
      setDisplayPosts([selectedBlog]);
      setHighlightedBlog(selectedBlog.id);
      setSelectedCategory(null); // clear category selection
    }
  }, [id]);

  // Handle category click
  const handleCategoryClick = (category) => {
    const filtered = blogData.filter((post) => post.category === category);
    setDisplayPosts(filtered);
    setSelectedCategory(category);
    setHighlightedBlog(null); // clear highlighted single blog
  };

  // Handle recent post click
  const handleRecentPostClick = (post) => {
    setDisplayPosts([post]);
    setSelectedCategory(null);
    setHighlightedBlog(post.id);
  };

  return (
    <section className="single-blog-area p-70">
      <div className="container">
        <div className="row gx-lg-5">
          {/* Left Side: Blog/Post(s) */}
          <div className="col-12 col-md-6 col-lg-8">
              <div className="single-blog-left">
              {displayPosts.map((post) => (
                <div className="single-post-box mb-5 p-4 shadow" key={post.id}>
                  <img src={post.image} alt={post.title} />
                  <h3 className="title mt-4">{post.title}</h3>
                  <p className="description mt-2">{post.description}</p>
                </div>
                ))}
            </div>
          </div>

          {/* Right Side: Categories and Recent */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="single-blog-right">
              {/* Blog Categories */}
              <div className="blog-category mb-5">
                <h3>Blog Categories</h3>
                <ul>
                  {categories.map((cat, index) => {
                    const count = blogData.filter((post) => post.category === cat).length;
                    return (
                      <li key={index}>
                        <button
                          className={`${selectedCategory === cat ? 'fw-bold' : ''}`}
                          onClick={() => handleCategoryClick(cat)}
                        >
                          <h4>{cat} <span>{count}</span></h4>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="recent-post mt-5">
                <h3 className="title">Recent Posts</h3>
                {recentPosts.map((post) => (
                  <ul
                    key={post.id}
                    className="d-flex gap-3 mb-3 cursor-pointer"
                    style={{
                      backgroundColor: highlightedBlog === post.id ? '#f0f0f0' : 'transparent',
                      cursor: 'pointer',
                      padding: '10px',
                      borderRadius: '5px'
                    }}
                    onClick={() => handleRecentPostClick(post)}
                  >
                    <li style={{ width: '150px' }}>
                      <img src={post.image} alt={post.title} className="img-fluid" />
                    </li>
                    <li>
                      <h4 className='mb-2'>{post.title}</h4>
                      <p className="mb-0">{post.description.substring(0, 60)}...</p>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBlog;

import React, { useState } from 'react';
import blogData from '../assets/BlogData';
import { Link } from 'react-router-dom';

const Blog = () => {
  const postsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogData.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(blogData.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <section className='blog-area p-70'>
        <div className="container">
          <div className="row">
            {currentPosts.map((post) => (
              <div className="col-12 col-md-6 col-lg-4" key={post.id}>
                <div className="blog-box shadow p-4 mb-3">
                  <img src={post.image} alt={post.title} />
                  <h3 className='title mt-4'>{post.title}</h3>
                  <p className='description'>{post.description}</p>
                  <ul className='d-flex justify-content-between align-items-center'>
                    <li>
                      <Link to={`/blog/${post.id}`} className='read-more-btn'>
                        Read More <span></span>
                      </Link>
                    </li>
                    <li>
                      <span className='published-date'>{post.date}</span>
                    </li>
                  </ul>
                  <h4 className='category-name'>{post.category}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Buttons */}
          <div className="pagination d-flex justify-content-center mt-5">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`btn mx-1 ${currentPage === i + 1 ? 'btn-dark' : 'btn-outline-dark'}`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

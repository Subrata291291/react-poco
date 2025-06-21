import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://mydem019.unaux.com/wp-json/wp/v2/posts?_embed')
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        posts.map(post => (
          <section className='blog-area p-100' key={post.id}>
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <div className="blog-box shadow p-4">
                    <img
                      src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url}
                      alt="thumbnail"
                    />
                    <h3
                      className='title'
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    <p
                      className='description'
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                    <ul className='d-flex justify-content-between align-items-center'>
                      <li>
                        <a href={`/blog/${post.id}`} className='read-more-btn'>
                          Read More <span></span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className='published-date'>
                          {new Date(post.date).toLocaleDateString()}
                        </a>
                      </li>
                    </ul>
                    <h4 className='category-name'>
                      {post.categories?.length ? `Category ID: ${post.categories[0]}` : 'Uncategorized'}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))
      )}
    </div>
  );
};

export default Blog;

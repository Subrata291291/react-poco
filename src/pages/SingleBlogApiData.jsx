import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleBlog = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`https://mydem019.unaux.com/wp-json/wp/v2/posts/${id}`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error('Error fetching single post:', error);
      });
  }, [id]);

  return (
    <div className="container py-5">
      {post ? (
        <>
          <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </>
      ) : (
        <p>Loading post...</p>
      )}
    </div>
  );
};

export default SingleBlog;

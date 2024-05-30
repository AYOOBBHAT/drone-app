// src/screens/Blog.js
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogdata } from '../data/Blogdata';


const Blog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) {
    // Blog List View
    return (
      <div className="blog-list">
        {blogdata.map((blog) => (
          <div key={blog.id} className="blog-item">
            <Link to={`/blogs/${blog.id}`}>
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <div className="blog-info">
                <h3>{blog.category}</h3>
                <h2>{blog.title}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  }

  // Blog Detail View
  const blog = blogdata.find((blog) => blog.id === parseInt(id));
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="blog-detail">
      <button onClick={() => navigate('/blogs')}>Back to Blogs</button>
      <img src={blog.image} alt={blog.title} className="blog-detail-image" />
      <div className="blog-detail-info">
        <h3>{blog.category}</h3>
        <h2>{blog.title}</h2>
        <p>{blog.author}</p>
        <p>{blog.date}</p>
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
    </div>
  );
};

export default Blog;

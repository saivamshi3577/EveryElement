import React from 'react';
import './Blog.css';

import blogTrends2024 from '../assets/blog-trends-2024.jpg';
import blogSofaGuide from '../assets/blog-sofa-guide.jpg';
import blogExteriorTips from '../assets/blog-exterior-tips.jpg';

const blogPosts = [
  {
    title: 'Top Interior Design Trends for 2024',
    description: 'Explore the latest trends in interior design and how to incorporate them into your home.',
    image: blogTrends2024,
    link: '/login',
  },
  {
    title: 'How to Choose the Perfect Sofa',
    description: 'A comprehensive guide to finding the right sofa that fits your style and space.',
    image: blogSofaGuide,
    link: '/login',
  },
  {
    title: 'Exterior Design Tips for a Stunning Curb Appeal',
    description: 'Enhance your home’s exterior with these practical design tips.',
    image: blogExteriorTips,
    link: '/login',
  },
];

const Blog = () => {
  return (
    <div className="blog">
      <h1>Our Blog</h1>
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-post">
            <img src={post.image} alt={post.title} />
            <div className="post-content">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <a href={post.link} className="read-more">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

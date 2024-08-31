import React from 'react';
import './Blog.css';

import blogTrends2024 from '../assets/blog-trends-2024.jpg';
import blogSofaGuide from '../assets/blog-sofa-guide.jpg';
import blogExteriorTips from '../assets/blog-exterior-tips.jpg';
import blogSmallSpace from '../assets/image 22.png';
import blogSustainableDesign from '../assets/image 23.png';
import blogLightingGuide from '../assets/image 24.png';
import blogCozyBedroom from '../assets/image 28.png';
import blogColorPalette from '../assets/image 29.png';
import blogStorageSolutions from '../assets/image 30.png';
import blogOutdoorLiving from '../assets/image 31.png';
import blogKitchenRenovation from '../assets/image 32.png';
import blogBathroomTrends from '../assets/image 33.png';
import blogHomeOfficeErgonomics from '../assets/image 34.png';

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
  {
    title: 'Maximizing Space in Small Apartments',
    description: 'Creative ideas and smart solutions to make the most out of small living spaces.',
    image: blogSmallSpace,
    link: '/login',
},
{
    title: 'Sustainable Interior Design: Eco-Friendly Choices',
    description: 'Learn how to create a beautiful home while minimizing your environmental impact.',
    image: blogSustainableDesign,
    link: '/login',
},
{
    title: 'The Ultimate Guide to Lighting Your Home',
    description: 'Discover different types of lighting and how to use them effectively in your space.',
    image: blogLightingGuide,
    link: '/login',
},
{
    title: 'Creating a Cozy Bedroom Retreat',
    description: 'Tips and tricks to transform your bedroom into a peaceful sanctuary.',
    image: blogCozyBedroom,
    link: '/login',
},
{
    title: 'Choosing the Right Color Palette for Your Home',
    description: 'A detailed guide on how to pick the perfect colors for your home’s interior.',
    image: blogColorPalette,
    link: '/login',
},
{
    title: 'Innovative Storage Solutions for Modern Homes',
    description: 'Smart storage ideas to keep your home organized and clutter-free.',
    image: blogStorageSolutions,
    link: '/login',
},
{
    title: 'Outdoor Living Spaces: Designing a Backyard Oasis',
    description: 'Create an outdoor space that feels like an extension of your home.',
    image: blogOutdoorLiving,
    link: '/login',
},
{
    title: 'Kitchen Renovation Ideas for a Functional Space',
    description: 'Update your kitchen with these renovation ideas that balance style and function.',
    image: blogKitchenRenovation,
    link: '/login',
},
{
    title: 'Bathroom Design Trends: Modern and Minimalist',
    description: 'Explore the latest trends in bathroom design to create a modern and serene space.',
    image: blogBathroomTrends,
    link: '/login',
},
{
    title: 'The Importance of Ergonomics in Home Office Design',
    description: 'Design a home office that’s both comfortable and conducive to productivity.',
    image: blogHomeOfficeErgonomics,
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

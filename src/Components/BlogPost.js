import React from 'react';
import './BlogPost.css';
import trendsImage from '../assets/blog-trends-2024.jpg'; // Example image, replace with actual
import { Link } from 'react-router-dom';
const BlogPost = () => {
  return (
    <div className="blog-post">
      <h1>Top Interior Design Trends for 2024</h1>
      <img src={trendsImage} alt="Interior Design Trends 2024" className="blog-image" />
      <p className="intro">
        Discover the latest interior design trends for 2024 and learn how you can incorporate them into your home. From sustainable materials to bold colors, these trends will help you create a stylish and modern living space.
      </p>

      <section className="content-section">
        <h2>1. Sustainable Materials</h2>
        <p>
          Sustainability continues to be a significant trend in 2024. Designers are focusing on eco-friendly materials such as bamboo, reclaimed wood, and recycled metal. These materials not only help the environment but also add a unique, natural feel to your home.
        </p>

        <h2>2. Bold Colors</h2>
        <p>
          Vibrant colors are making a comeback in 2024. Expect to see bold shades like deep blues, rich greens, and even striking reds used as accent walls or in furniture pieces. These colors can bring a dramatic flair to any room.
        </p>

        <h2>3. Maximalism</h2>
        <p>
          While minimalism has been popular for many years, 2024 is embracing maximalism. This trend encourages the mixing of patterns, textures, and styles to create a rich, layered look. Don’t be afraid to showcase your personality through eclectic design choices.
        </p>

        <h2>4. Biophilic Design</h2>
        <p>
          Bringing the outdoors in remains a top trend. Biophilic design integrates natural elements such as plants, water features, and natural light into indoor spaces. This approach not only enhances aesthetics but also promotes well-being and reduces stress.
        </p>

        <h2>5. Smart Home Integration</h2>
        <p>
          Technology is seamlessly blending with design in 2024. Smart home devices are being integrated into the overall aesthetic of spaces, making them not only functional but also visually appealing. Think of smart lighting, automated window treatments, and voice-activated assistants that complement your decor.
        </p>
      </section>

      <section className="call-to-action">
        <h3>Ready to Transform Your Space?</h3>
        <p>
          If you’re inspired by these trends, contact us today to start planning your interior design project. Our team of experts will help you bring these ideas to life in your home.
        </p>
        <Link to="/contact">
      <button className="contact-button">Contact Us</button>
      </Link>
      </section>
    </div>
  );
}

export default BlogPost;

import React, { useState } from 'react';
import './Home.css';
import heroImageAlt from '../assets/hero-alt.jpg';
import serviceInterior from '../assets/service-interior.jpg';
import serviceExterior from '../assets/service-exterior.jpg';
import featuredProject from '../assets/featured-project.jpg';
import clientTestimonial from '../assets/client-testimonial.jpg';
import blogPost from '../assets/blog-post.jpg';
import facebookIcon from '../assets/facebook-icon.png'; 
import instagramIcon from '../assets/instagram-icon.png'; 
import linkedinIcon from '../assets/linkedin-icon.png'; 
import twitterIcon from '../assets/twitter-icon.png'; 
const Home = () => {
  const [faqOpen, setFaqOpen] = useState(null);

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Transform Your Space with Every Element</h1>
          <p>Innovative interior and exterior design solutions crafted to suit every aspect of your lifestyle.</p>
          <div className="cta-buttons">
            <a href="/contact" className="cta-button">Book a Free Consultation</a>
            <a href="/portfolio" className="cta-button">Explore Our Work</a>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImageAlt} alt="Hero Alternative" className="hero-image-alt" />
        </div>
      </section>

      <section className="services">
        <h2>What We Offer</h2>
        <div className="service-cards">
          <div className="service-card">
            <img src={serviceInterior} alt="Interior Design" />
            <h3>Interior Design</h3>
            <p>Elegant and personalized interior designs that resonate with your taste.</p>
          </div>
          <div className="service-card">
            <img src={serviceExterior} alt="Exterior Design" />
            <h3>Exterior Design</h3>
            <p>Enhance your home’s curb appeal with our sophisticated exterior solutions.</p>
          </div>
        </div>
      </section>

      <section className="featured-projects">
        <h2>Highlighted Projects</h2>
        <div className="projects-gallery">
          <div className="project-item">
            <img src={featuredProject} alt="Featured Project" />
            <h3>Elegant Urban Retreat</h3>
            <p>A seamless blend of comfort and style in the heart of the city.</p>
            <a href="/portfolio" className="cta-button">See More</a>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Every Element?</h2>
        <ul className =" listeditems">
          <li>Tailored Designs: Reflecting your unique style.</li>
          <li>Expert Team: Collaborate with top-notch designers.</li>
          <li>Comprehensive Service: From initial concept to final touch.</li>
          <li>Sustainable Practices: Using eco-friendly materials.</li>
        </ul>
      </section>

      <section className="client-testimonials">
        <h2>Client Testimonials</h2>
        <div className="testimonials">
          <div className="testimonial">
            <img src={clientTestimonial} alt="Client Testimonial" />
            <blockquote>
              “Every Element created a beautiful and functional space for us. We couldn't be happier!” – Satisfied Client
            </blockquote>
          </div>
          <div className="testimonial">
            <img src={clientTestimonial} alt="Client Testimonial" />
            <blockquote>
              “Every Element created a beautiful and functional space for us. We couldn't be happier!” – Satisfied Client
            </blockquote>
          </div>
          <div className="testimonial">
            <img src={clientTestimonial} alt="Client Testimonial" />
            <blockquote>
              “Every Element created a beautiful and functional space for us. We couldn't be happier!” – Satisfied Client
            </blockquote>
          </div>
        </div>
      </section>

      <section className="blog-highlights">
        <h2>From Our Blog</h2>
        <div className="blog-posts">
          <div className="blog-post">
            <img src={blogPost} alt="Blog Post" />
            <h3>Top Design Trends for 2024</h3>
            <p>Discover the latest trends and how to incorporate them into your home.</p>
            <a href="/blog" className="cta-button">Read More</a>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <h2>FAQs</h2>
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleFaq(1)}>
            <span>What services does Every Element offer?</span>
            <span className="faq-icon">{faqOpen === 1 ? '-' : '+'}</span>
          </div>
          {faqOpen === 1 && (
            <div className="faq-answer">
              <p>Every Element offers comprehensive interior and exterior design services, including custom furniture solutions.</p>
            </div>
          )}
        </div>
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleFaq(2)}>
            <span>What is the design process like?</span>
            <span className="faq-icon">{faqOpen === 2 ? '-' : '+'}</span>
          </div>
          {faqOpen === 2 && (
            <div className="faq-answer">
              <p>Our design process starts with a consultation, followed by concept development, design finalization, and implementation.</p>
            </div>
          )}
        </div>
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleFaq(3)}>
            <span>How do I get started with Every Element?</span>
            <span className="faq-icon">{faqOpen === 3 ? '-' : '+'}</span>
          </div>
          {faqOpen === 3 && (
            <div className="faq-answer">
              <p>You can get started by booking a free consultation through our website or contacting us directly.</p>
            </div>
          )}
        </div>
      </section>

      <section className="social-media">
        <h2>Connect with Us</h2>
        <div className="social-icons">
          <img src={facebookIcon} alt="Social Media Icons" />
          <img src={instagramIcon} alt="Social Media Icons" />
          <img src={linkedinIcon} alt="Social Media Icons" />
          <img src={twitterIcon} alt="Social Media Icons" />
        </div>
      </section>
    </div>
  );
};

export default Home;

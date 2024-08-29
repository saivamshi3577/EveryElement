import React from 'react';
import './ContactUs.css';
import contactImage from '../assets/contact-image.jpg';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <section className="contact-intro">
        <div className="contact-intro-content">
          <h1>Get in Touch with Every Element</h1>
          <p>
            We're here to help you transform your space. Whether you have questions about our services, need a consultation, or just want to say hello, we'd love to hear from you!
          </p>
        </div>
        <div className="contact-intro-image">
          <img src={contactImage} alt="Contact Us" />
        </div>
      </section>

      <section className="contact-form-section">
        <h2>Contact Form</h2>
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>

      <section className="contact-address">
        <h2>Our Address</h2>
        <p>Every Element Design Studio</p>
        <p>1234 Design Street</p>
        <p>Suite 567</p>
        <p>Design City, DC 78910</p>
        <p>Email: contact@everyelement.com</p>
        <p>Phone: (123) 456-7890</p>
      </section>
    </div>
  );
};

export default ContactUs;

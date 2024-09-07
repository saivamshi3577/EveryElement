import React, { useRef, useState } from 'react';
import './ContactUs.css';
import contactImage from '../assets/contact-image.jpg';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  const navigate = useNavigate();
  const [formValid, setFormValid] = useState(false);

  const validateForm = () => {
    const name = form.current['from_name'].value;
    const email = form.current['from_email'].value;
    const message = form.current['message'].value;

    setFormValid(name && email && message);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kgmiylc', 'template_lf2ktyj', form.current, {
        publicKey: 'b_lCVScumprFABoz7',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          navigate('/thank-you');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

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
        <form ref={form} className="contact-form" onSubmit={sendEmail} onChange={validateForm}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="from_name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="from_email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit" disabled={!formValid}>Send Message</button>
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

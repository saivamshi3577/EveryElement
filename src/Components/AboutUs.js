import React from 'react';
import './AboutUs.css';
import companyImage from '../assets/company-image.jpg'; 
import interiorsImage from '../assets/interiors-image.jpg'; 
import exteriorsImage from '../assets/exteriors-image.jpg'; 
import city1Image from '../assets/city1.jpg'; 
import city2Image from '../assets/city2.jpg'; 
import city3Image from '../assets/city3.jpg'; 
import employeeImage from '../assets/employee.jpg'; 

const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="intro">
        <div className="intro-content">
          <h1>Welcome to Every Element</h1>
          <p>
            At Every Element, we are passionate about transforming ordinary spaces into extraordinary experiences. Founded on a love for design and a commitment to excellence, we specialize in creating bespoke interiors and exteriors that resonate with your lifestyle. Our comprehensive approach covers every aspect of design—from initial consultation and conceptualization to final execution and finishing touches.
          </p>
          <p>
            Our process is thorough and client-focused. We start by understanding your vision and needs, then our talented designers create a tailored plan that reflects your style and functionality requirements. We manage the project end-to-end, ensuring that every detail is perfect and that you are delighted with the final result.
          </p>
        </div>
        <div className="intro-image">
          <img src={companyImage} alt="Company" />
        </div>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <div className="service-details">
          <div className="service-item">
            <img src={interiorsImage} alt="Interior Design" className="service-image" />
            <div className="service-info">
              <h3>Interior Design</h3>
              <p>
                Our interior design services are crafted to elevate every room of your home or business. Whether you're redesigning a hospital’s waiting area, a school’s classroom, or your living room, our team delivers innovative solutions that blend aesthetics with functionality. We use high-quality materials and stay abreast of the latest trends to ensure your space is both stylish and practical.
              </p>
            </div>
          </div>
          <div className="service-item">
            <img src={exteriorsImage} alt="Exterior Design" className="service-image" />
            <div className="service-info">
              <h3>Exterior Design</h3>
              <p>
                Our exterior design services enhance the curb appeal and functionality of your property. From modern facades and elegant entrances to vibrant outdoor areas, we provide comprehensive solutions that make a lasting impression. We ensure that every exterior project complements the overall design and architecture of your space.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="meet-our-founders">
        <h2>Meet Our Founders</h2>
        <div className="founders">
          <div className="founder-item">
            <img src={employeeImage} alt="Founder 1" />
            <h3>Sai</h3>
            <p>Co-Founder and Lead Designer. Sai brings over 15 years of experience in interior design and a passion for transforming spaces.</p>
          </div>
          <div className="founder-item">
            <img src={employeeImage} alt="Founder 2" />
            <h3>Vamshi</h3>
            <p>Co-Founder and Creative Director. Vamshi has a keen eye for design trends and a talent for creating innovative and functional spaces.</p>
          </div>
          <div className="founder-item">
            <img src={employeeImage} alt="Founder 2" />
            <h3>Virat</h3>
            <p>Co-Founder and Creative Director. Virat has a keen eye for design trends and a talent for creating innovative and functional spaces.</p>
          </div>
        </div>
      </section>

      <section className="cities">
        <h2>Where We Operate</h2>
        <div className="cities-list">
          <div className="city-item">
            <img src={city1Image} alt="City 1" />
            <h3>Hyderabad</h3>
          </div>
          <div className="city-item">
            <img src={city2Image} alt="City 2" />
            <h3>Bangaloore</h3>
          </div>
          <div className="city-item">
            <img src={city3Image} alt="City 3" />
            <h3>Pune</h3>
          </div>
        </div>
      </section>

      <section className="employee-quotes">
        <h2>What Our Team Says</h2>
        <div className="quotes">
          <blockquote>
            "Working at Every Element has been a fulfilling journey. We not only create beautiful spaces but also build lasting relationships with our clients." – Sai Charan, Senior Designer
          </blockquote>
          <blockquote>
            "Every project is a new adventure. I love how we turn our clients' visions into reality with creativity and precision." – Sai Ram, Project Manager
          </blockquote>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;

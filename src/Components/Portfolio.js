import React from 'react';
import './Portfolio.css';
import residentialLivingRoom from '../assets/residential-living-room.jpg';
import residentialKitchen from '../assets/residential-kitchen.jpg';
import commercialOffice from '../assets/commercial-office.jpg';
import commercialRestaurant from '../assets/commercial-restaurant.jpg';
import specialtyHomeOffice from '../assets/specialty-home-office.jpg';
import specialtyGym from '../assets/specialty-gym.jpg';
import AfterLivingRoom from '../assets/after-living.jpg';
import beforeLivingRoom from '../assets/before-living.jpg';
import AfterKitchen from '../assets/after-kitchen.jpg';
import beforeKitchen from '../assets/before-kitchen.jpg';
import facadeDesign from '../assets/facade-design.jpg';
import landscaping from '../assets/landscaping.jpg';
import residentialhall from '../assets/residential-hall.jpg';
import commercialtheatre from '../assets/commercial-theatre.jpg'

const interiorProjects = [
  {
    title: 'Modern Living Room',
    description: 'A sleek living room design combining comfort and modern aesthetics.',
    dateCompleted: 'March 2023',
    remarks: 'Revamped space with contemporary furnishings and smart lighting.',
    image: residentialLivingRoom
  },
  {
    title: 'Elegant Hall Remodel',
    description: 'A hall makeover featuring high-end finishes and stylish déco',
    dateCompleted: 'Sep 2023',
    remarks: 'Enhanced functionality and visual appeal with custom furniture and new flooring.',
    image: residentialhall
  },
  {
    title: 'Elegant Kitchen Remodel',
    description: 'A kitchen makeover featuring high-end appliances and stylish cabinetry.',
    dateCompleted: 'June 2023',
    remarks: 'Enhanced functionality and visual appeal with custom cabinetry and new countertops.',
    image: residentialKitchen
  },
  // Add more interior projects as needed
];

const commercialProjects = [
  {
    title: 'Contemporary Office Space',
    description: 'An office design that fosters productivity and creativity.',
    dateCompleted: 'July 2022',
    remarks: 'Open-plan layout with ergonomic furniture and modern aesthetics.',
    image: commercialOffice
  },
  {
    title: 'Chic Restaurant Interior',
    description: 'A stylish restaurant design that enhances dining experiences.',
    dateCompleted: 'November 2022',
    remarks: 'Sophisticated decor and layout aimed at maximizing ambiance.',
    image: commercialRestaurant
  },
  {
    title: 'Monk Theatre Interior',
    description: 'A fantastic theatre design that enhances good sound and user experiences.',
    dateCompleted: 'December 2023',
    remarks: 'Sophisticated decor and layout aimed at maximizing ambiance.',
    image: commercialtheatre
  },
  // Add more commercial projects as needed
];

const specialtyProjects = [
  {
    title: 'Functional Home Office',
    description: 'A home office designed for productivity and comfort.',
    dateCompleted: 'September 2023',
    remarks: 'Incorporated ergonomic furniture and ample storage solutions.',
    image: specialtyHomeOffice
  },
  {
    title: 'State-of-the-Art Home Gym',
    description: 'A home gym equipped for diverse workout needs.',
    dateCompleted: 'December 2023',
    remarks: 'Custom-designed space with advanced fitness equipment and inspirational decor.',
    image: specialtyGym
  },
];

const beforeAfterProjects = [
  {
    title: 'Living Room Transformation',
    description: 'Before and after photos showcasing a dramatic living room redesign.',
    imageBefore: beforeLivingRoom,
    imageAfter: AfterLivingRoom,
  },
  {
    title: 'Kitchen Makeover',
    description: 'Highlighting the transformation of a kitchen space.',
    imageBefore: beforeKitchen,
    imageAfter: AfterKitchen,
  },
];

const exteriorProjects = [
  {
    title: 'Modern Facade Design',
    description: 'A contemporary facade that enhances the building’s curb appeal.',
    dateCompleted: 'January 2023',
    remarks: 'Implemented sleek materials and modern design elements.',
    image: facadeDesign
  },
  {
    title: 'Beautiful Landscaping',
    description: 'A landscaped garden that complements the home’s exterior.',
    dateCompleted: 'April 2023',
    remarks: 'Designed with native plants and functional outdoor spaces.',
    image: landscaping
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>Our Portfolio</h1>

      <section className="portfolio-section">
        <h2>Residential Projects</h2>
        <div className="project-gallery">
          {interiorProjects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p><strong>Date Completed:</strong> {project.dateCompleted}</p>
                <p><strong>Remarks:</strong> {project.remarks}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="portfolio-section">
        <h2>Commercial Projects</h2>
        <div className="project-gallery">
          {commercialProjects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p><strong>Date Completed:</strong> {project.dateCompleted}</p>
                <p><strong>Remarks:</strong> {project.remarks}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="portfolio-section">
        <h2>Specialty Projects</h2>
        <div className="project-gallery">
          {specialtyProjects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p><strong>Date Completed:</strong> {project.dateCompleted}</p>
                <p><strong>Remarks:</strong> {project.remarks}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="portfolio-section">
        <h2>Before and After Photos</h2>
        <div className="before-after-gallery">
          {beforeAfterProjects.map((project, index) => (
            <div key={index} className="before-after-card">
              <h3>{project.title}</h3>
              <div className="before-after-images">
                <div className="image-container">
                  <img src={project.imageBefore} alt="Before" className="before-image" />
                  <p>Before</p>
                </div>
                <div className="image-container">
                  <img src={project.imageAfter} alt="After" className="after-image" />
                  <p>After</p>
                </div>
              </div>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="portfolio-section">
        <h2>Exterior Design Projects</h2>
        <div className="project-gallery">
          {exteriorProjects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p><strong>Date Completed:</strong> {project.dateCompleted}</p>
                <p><strong>Remarks:</strong> {project.remarks}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Portfolio;

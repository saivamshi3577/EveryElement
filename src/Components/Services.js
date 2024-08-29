import React from 'react';
import './Services.css';
import livingRoomImg1 from '../assets/interior-living-room-1.jpg';
import livingRoomImg2 from '../assets/interior-living-room-2.jpg';
import bedroomImg1 from '../assets/interior-bedroom-1.jpg';
import bedroomImg2 from '../assets/interior-bedroom-2.jpg';
import facadeDesignImg1 from '../assets/exterior-facade-design-1.jpg';
import facadeDesignImg2 from '../assets/exterior-facade-design-2.jpg';
import landscapingImg1 from '../assets/exterior-landscaping-1.jpg';
import landscapingImg2 from '../assets/exterior-landscaping-2.jpg';

const Services = () => {
  return (
    <div className="services">
      <section className="interior-services">
        <h2>Interior Design Services</h2>
        <div className="service-category">
          <h3>Living Room</h3>
          <div className="service-images">
            <img src={livingRoomImg1} alt="Living Room Design 1" />
            <img src={livingRoomImg2} alt="Living Room Design 2" />
            <img src={livingRoomImg2} alt="Living Room Design 2" />
          </div>
          <p>
            Transform your living room into a welcoming space that reflects your personality. Whether you prefer a cozy and traditional setting or a sleek and modern look, our team ensures your living area is both functional and stylish.
          </p>
        </div>
        <div className="service-category">
          <h3>Bedroom</h3>
          <div className="service-images">
            <img src={bedroomImg1} alt="Bedroom Design 1" />
            <img src={bedroomImg2} alt="Bedroom Design 2" />
            <img src={bedroomImg1} alt="Bedroom Design 1" />
          </div>
          <p>
            Create a serene retreat with our bedroom design services. We focus on comfort and aesthetics, integrating elegant furnishings and soothing color schemes to enhance your rest and relaxation.
          </p>
        </div>
      </section>

      <section className="exterior-services">
        <h2>Exterior Design Services</h2>
        <div className="service-category">
          <h3>Facade Design</h3>
          <div className="service-images">
            <img src={facadeDesignImg1} alt="Facade Design 1" />
            <img src={facadeDesignImg2} alt="Facade Design 2" />
            <img src={facadeDesignImg1} alt="Facade Design 1" />
          </div>
          <p>
            Enhance the curb appeal of your home with our facade design services. We provide innovative solutions to ensure your home stands out with a unique and captivating exterior.
          </p>
        </div>
        <div className="service-category">
          <h3>Landscaping</h3>
          <div className="service-images">
            <img src={landscapingImg1} alt="Landscaping Design 1" />
            <img src={landscapingImg2} alt="Landscaping Design 2" />
            <img src={landscapingImg1} alt="Landscaping Design 1" />
          </div>
          <p>
            Our landscaping services transform outdoor spaces into beautiful, functional areas. From lush gardens to stylish outdoor living spaces, we create environments that complement your home’s exterior.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Services;

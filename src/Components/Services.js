

import React from 'react';
import './Services.css';
import livingRoomImg1 from '../assets/image 54.png';
import livingRoomImg2 from '../assets/interior-living-room-2.jpg';
import livingRoomImg3 from '../assets/image 52.png';
import bedroomImg1 from '../assets/interior-bedroom-1.jpg';
import bedroomImg2 from '../assets/interior-bedroom-2.jpg';
import bedroomImg3 from '../assets/image 53.png';
import kitchenImg1 from '../assets/interior-kitchen-1.jpg'; 
import kitchenImg2 from '../assets/interior-kitchen-2.jpg'; 
import kitchenImg3 from '../assets/interior-kitchen-3.jpg'; 
import facadeDesignImg1 from '../assets/exterior-facade-design-1.jpg';
import facadeDesignImg2 from '../assets/exterior-facade-design-2.jpg';
import facadeDesignImg3 from '../assets/facade-design.jpg';
import landscapingImg1 from '../assets/exterior-landscaping-1.jpg';
import landscapingImg2 from '../assets/exterior-landscaping-2.jpg';
import landscapingImg3 from '../assets/featured-project.jpg';
import outdoorLightingImg1 from '../assets/exterior-outdoor-lighting-1.jpg'; 
import outdoorLightingImg2 from '../assets/exterior-outdoor-lighting-2.jpg'; 
import outdoorLightingImg3 from '../assets/exterior-outdoor-lighting-3.jpg'; 
import porticoImg1 from '../assets/exterior-front-entrance-1.jpg'; 
import porticoImg2 from '../assets/exterior-front-entrance-2.jpg'; 
import porticoImg3 from '../assets/exterior-front-entrance-3.jpg'; 

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
            <img src={livingRoomImg3} alt="Living Room Design 3" />
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
            <img src={bedroomImg3} alt="Bedroom Design 3" />
          </div>
          <p>
            Create a serene retreat with our bedroom design services. We focus on comfort and aesthetics, integrating elegant furnishings and soothing color schemes to enhance your rest and relaxation.
          </p>
        </div>
        <div className="service-category">
          <h3>Kitchen</h3>
          <div className="service-images">
            <img src={kitchenImg1} alt="Kitchen Design 1" />
            <img src={kitchenImg2} alt="Kitchen Design 2" />
            <img src={kitchenImg3} alt="Kitchen Design 3" />
          </div>
          <p>
            Revamp your kitchen with our expert design services. We focus on functionality and aesthetics to create a space that is both practical and visually appealing, perfect for cooking and entertaining.
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
            <img src={facadeDesignImg3} alt="Facade Design 3" />
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
            <img src={landscapingImg3} alt="Landscaping Design 3" />
          </div>
          <p>
            Our landscaping services transform outdoor spaces into beautiful, functional areas. From lush gardens to stylish outdoor living spaces, we create environments that complement your home’s exterior.
          </p>
        </div>
        <div className="service-category">
          <h3>Outdoor Lighting</h3>
          <div className="service-images">
            <img src={outdoorLightingImg1} alt="Outdoor Lighting Design 1" />
            <img src={outdoorLightingImg2} alt="Outdoor Lighting Design 2" />
            <img src={outdoorLightingImg3} alt="Outdoor Lighting Design 3" />
          </div>
          <p>
            Illuminate your exterior spaces with our outdoor lighting services. We design lighting solutions that enhance safety, highlight architectural features, and create ambiance in your outdoor areas.
          </p>
        </div>
        <div className="service-category">
          <h3>Front Entrance/Portico</h3>
          <div className="service-images">
            <img src={porticoImg1} alt="Front Entrance Design 1" />
            <img src={porticoImg2} alt="Front Entrance Design 2" />
            <img src={porticoImg3} alt="Front Entrance Design 3" />
          </div>
          <p>
            Make a grand first impression with our portico and front entrance design services. We create inviting and stylish entrances that set the tone for the rest of your home.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Services;

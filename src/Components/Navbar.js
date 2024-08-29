// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import logo from '../assets/logo.png'; 

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">
//         <Link to="/">
//           <img src={logo} alt="Every Element Logo" className="logo" />
//         </Link>
//       </div>
//       <button className="menu-toggle" onClick={toggleMenu}>
//         ☰
//       </button>
//       <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About Us</Link></li>
//         <li><Link to="/services">Services</Link></li>
//         <li><Link to="/portfolio">Portfolio</Link></li>
//         <li><Link to="/shop">Shop</Link></li>
//         <li><Link to="/blog">Blog</Link></li>
//         <li><Link to="/testimonials">Testimonials</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//         <li><Link to="/faq">FAQ</Link></li>
//         <li><Link to="/login">Login</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src={logo} alt="Every Element Logo" className="logo" />
        </Link>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

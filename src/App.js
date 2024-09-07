import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Blog from './Components/Blog';
import ContactUs from './Components/ContactUs';
import Login from './Components/login';
import Footer from './Components/Footer';
import ThankYou from './Components/thankyou';
import BlogPost from './Components/BlogPost';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path ="/blogpost" element={<BlogPost />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/thankyou" element={<ThankYou/>} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
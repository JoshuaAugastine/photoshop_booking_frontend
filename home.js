// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Capture a moments</h1>
        <h2>Behind every image, there's a journey of laughter, love, and life.</h2>
      </header>

      <section className="featured-section">
        <h2>Featured Photos</h2>
        {/* Add your featured photos or slideshow here */}
      </section>

      <section className="services-section">
        <h2>Our Services</h2>
        <div className="service">
          <h3>Event Photography</h3>
          <p>Capture special moments with our event photography services.</p>
        </div>
        <div className="service">
          <h3>Portrait Photography</h3>
          <p>Experience the art of portrait photography with our skilled photographers.</p>
        </div>
        {/* Add more services as needed */}
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <Link to="/contact">
          <button>Contact Now</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;

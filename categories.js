// Categories.js
import React from 'react';
import { Link } from 'react-router-dom';
import './categories.css';

const Categories = () => {
  return (
    <div className="categories-container">
      <h2>Types of Photography</h2>
      <div className="categories-list">
        <Link to="/categories/wedding">Wedding Photography</Link>
        <Link to="/categories/portraits">Portraits Photography</Link>
        <Link to="/categories/event">Event Photography</Link>
        <Link to="/categories/portfolio">Portfolio Photography</Link>
        <Link to="/categories/modeling">Modeling Photography</Link>
        {/* Add more categories as needed */}
      </div>
    </div>
  );
};

export default Categories;

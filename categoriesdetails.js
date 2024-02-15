// CategoriesDetails.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './categories.css'; // Import the same CSS file used for Categories.js

const CategoriesDetails = () => {
  const { category } = useParams();
  console.log('Category:', category);

  // Define collections for each category
  const collectionsMap = {
    wedding: ["Pre wedding shoot", "Outdoor pre wedding shoot", "Engagement shoot", "Film wedding photoshoot"],
    portraits: ["Traditional portraits", "Environment portraits", "Candid portraits", "Self-portraits"],
    event: ["Birthday shoot", "Corporate events", "Parties shoot", "Family shoot"],
    portfolio: ["Nature Photography", "People Photography", "Man-made photography"],
    modeling: ["Editorial fashion", "Glamour Photography", "Commercial model"]
  };

  // Debugging statements
  console.log('Collections Map:', collectionsMap);

  const collections = collectionsMap[category] || [];

  // Debugging statements
  console.log('Collections:', collections);

  return (
    <div className="categories-detail-container">
      <h2>{category} Photography</h2>
      <p>Select a collection:</p>
      <div className="collections-list">
        {collections.map((collection, index) => (
          <Link key={index} to={`/categories/${category}/${encodeURIComponent(collection)}/details`}>
            <p>{collection}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesDetails;

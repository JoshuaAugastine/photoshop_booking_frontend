// CollectionDetailsPage.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';
import PreWedding from './preWedding';
import './collectiondetails.css';

const CardComponent = styled.div`
  width: 350px;
  height: 350px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 2rem;
  border: 2px #00095b solid;
  border-radius: 10px;
`;

const preWeddingList = [
  {
    name: 'candid',
    image: './img1.jpg',
  },
];

const CollectionDetailsPage = () => {
  const { category, collection } = useParams();
  const navigate = useNavigate();

  const handleBookNowClick = () => {
    // Navigate to the booking page
    navigate('/booking', {
      state: { category, collection }, // Pass additional data if needed
    });
  };

  return (
    <div>
      <h2>{category} - {collection} Details</h2>
      {/* Add collection details here */}
      <PreWedding />
     
      {/* Centered Book Now button */}
      <div className="buttonContainer">
        <button onClick={handleBookNowClick}>Book Now</button>
      </div>
    </div>
  );
};

export default CollectionDetailsPage;

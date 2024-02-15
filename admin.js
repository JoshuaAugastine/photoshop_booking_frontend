// Admin.js
import React, { useState } from 'react';
import BookingTable from './bookingtable';
import Remark from './getapi';

const Admin = () => {
  const [bookings, setBookings] = useState([]); // State to hold bookings data

  const handleViewBookings = async () => {
    try {
      const response = await Remark();
  
      if (!response.ok) {
        alert(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      alert (JSON.stringify(data));
  
      // Update the state with the fetched data
      setBookings(data.result);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      // Handle errors or display a notification to the user
    }
  };

  return (
    <div>
      <h2>Welcome to the Admin Page</h2>
      <p>Explore and manage bookings effortlessly. Click the button below to view bookings:</p>
      <button onClick={handleViewBookings}>View Bookings</button>

      {/* Render the BookingTable component with the bookings data */}
      {bookings.length > 0 && <BookingTable bookings={bookings} />}
    </div>
  );
};

export default Admin;

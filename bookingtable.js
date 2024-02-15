// BookingTable.js
import React from 'react';

const BookingTable = ({ bookings }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>PhoneNumber</th>
          <th>Location</th>
          <th>PhotoType</th>
          <th>Others</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map((booking) => (
          <tr key={booking.id}>
            <td>{booking.id}</td>
            <td>{booking.name}</td>
            <td>{booking.phone_number}</td>
            <td>{booking.location}</td>
            <td>{booking.photo_type}</td>
            <td>{booking.others}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookingTable;

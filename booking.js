import React, { useState } from 'react';
import './booking.css'; // Import the CSS file
import Create from './create'; 

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    location: '',
    photoType: '',
    other: '',
  });

  const [notification, setNotification] = useState(null);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async() => {
   //alert(formData)

    let value = Create(formData);

    // Display a notification
    setNotification('Form data stored successfully!');
    // Clear the notification after a certain time (e.g., 5 seconds)
    setTimeout(() => {
      setNotification(null);
    }, 5000);

  };

  return (
    <div className="form-container">
      {notification && <div className="notification">{notification}</div>}

      <form>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>
          Phone Number:
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </label>

        <label>
          Location:
          <input type="text" name="location" value={formData.location} onChange={handleChange} required />
        </label>

        <label>
          Photo Type:
          <input type="text" name="photoType" value={formData.photoType} onChange={handleChange} required />
        </label>

        <label>
          Other:
          <textarea name="other" value={formData.other} onChange={handleChange}></textarea>
        </label>

        <div className="button-center">
          <button type="submit" onClick={handleSubmit}>OK</button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
//import './firebase';
import Navbar from './navbar';
import Home from './home';
import Login from './login';
import About from './about';
import Contact from './contact';
import ContactPage from './contactus';
import Categories from './categories';
import CategoriesDetails from './categoriesdetails';
//import CollectionDetails from './collection'; // Import CollectionDetails
import CollectionDetailsPage from './collectiondetails';
import BookingForm from './booking';
import Admin from './admin';
//import BookingPage from './bookingdetails';
//import PhoneSignUp from './components/PhoneSignUp';
//import { UserAuthContextProvider } from "./context/UserAuthContext";


function App() {
  return (
    <Router>
    
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contactus" element={<ContactPage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:category" element={<CategoriesDetails />} />
          <Route path="/categories/:category/:collection/details" element={<CollectionDetailsPage />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/booking" element={<BookingForm />} />
          
        </Routes>
      </div>
      
      </Router>
  );
}

export default App;
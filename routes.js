 
 
 module.exports = app =>{
 const bookingController = require('./bookingController');
 //booking
 app.post('/booking/add',bookingController.insertBookingInfo);
 app.get('/booking', bookingController.allBookingId);
 app.put('/booking/up', bookingController.updateBooking);
 }
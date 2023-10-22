const { Router } = require('express');
const bookingController=require('./controller');


const bookingRouter = new Router();

bookingRouter.get('/',bookingController.getAllbookings);
bookingRouter.post('/addBooking',bookingController.addBooking);

module.exports=bookingRouter;
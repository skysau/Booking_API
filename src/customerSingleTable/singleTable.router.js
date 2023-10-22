const { Router } = require('express');
const singleTableController=require('./singleTable.collroller');


const router = new Router();

router.get('/',singleTableController.getAllCustomers);
router.post('/addCustomer',singleTableController.addCustomer);
router.post('/:id',singleTableController.getBookingByCustomersId);

module.exports=router;
const { Router } = require('express');
const controller=require('./controller');


const router = new Router();

router.get('/',controller.getAllCustomers);
router.post('/addCustomer',controller.addCustomer);
router.post('/updateCustomer/:id',controller.updateCustomerById)
router.get('/list',controller.getAllDataCustomer)

module.exports=router;
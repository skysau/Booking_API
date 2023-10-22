const { Router } = require('express');
const controller=require('./controller');


const router = new Router();

router.get('/',controller.getAllCustomers);
router.post('/addCustomer',controller.addCustomer);

module.exports=router;
const express=require("express");
const customersRoute =require('./src/customers/route');
const bookingRoute =require('./src/bookings/route');
const singleTableCustomerRoute=require('./src/customerSingleTable/singleTable.router')
const app=express();
require('dotenv').config();


const port= process.env.PORT || 3000;
const apiKey = process.env.API_KEY;



app.use(express.json());

app.use((req, res, next) => {
    const { key } = req.headers;
  
    if (key === apiKey ) {
      next(); 
    } else {
      res.status(401).json({ message: 'Authentication failed' });
    }
  });

app.use("/api/customers",customersRoute);
app.use("/api/bookings",bookingRoute);
app.use("/api/singleTableCustomer",singleTableCustomerRoute);


app.listen(port,()=>console.log(`App listening on port no :- ${port}`));
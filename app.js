const express=require("express");
const customersRoute =require('./src/customers/route');
const bookingRoute =require('./src/bookings/route');
const singleTableCustomerRoute=require('./src/customerSingleTable/singleTable.router')
const app=express();
const port=3000;



app.use(express.json());

app.get("/",(req,res)=>{
    res.send({message:"hello world"});
});

app.use("/api/customers",customersRoute);
app.use("/api/bookings",bookingRoute);
app.use("/api/singleTableCustomer",singleTableCustomerRoute);


app.listen(port,()=>console.log(`App listening on port no :- ${port}`));
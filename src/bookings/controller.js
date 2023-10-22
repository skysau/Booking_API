const pool =require('../db');
const bookingQuery =require('./quaries')

const getAllbookings=(req,res)=>{
    pool.query(bookingQuery.getAllBookings,(error,result)=>{
        if (error){
            res.json(error);
        } else {
            res.status(200).json({message:"Successfully fetched Bookings Data",
            status:200
            ,data:result.rows})
        }
    })
}

const addBooking =(req,res)=>{
     const  { bookingid,date , bill }=req.body;
     const customerid=`${req.body.clubid}_${req.body.phone}_${req.body.customerid}`
     pool.query(bookingQuery.addBookings,[bookingid , date , bill , customerid],(error,result)=>{
        if (error){
            res.json(error);
        } else {
            res.status(200).json({message:"Successfully Added Bookings Data",
            status:200})
        }
    })

}

module.exports ={getAllbookings,addBooking}
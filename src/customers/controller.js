const pool =require('../db');
const customerQuery =require('./quaries')

const getAllCustomers=(req,res)=>{
    pool.query(customerQuery.getAllCustomer,(error,result)=>{
        if (error){
            res.json(error);
        } else {
            res.status(200).json({message:"Successfully fetched customers Data",
            status:200
            ,data:result.rows})
        }
    })
}

const addCustomer=(req,res)=>{
    const {phone, customername ,facilities, broadcast , clubid}=req.body;
    pool.query(customerQuery.checkCustomer,[phone,clubid],(error,result)=>{
        if (result.rows.length){
            res.json("phone number alredy exist");
        } else{
            if(error){
                res.json(error)
            }else{
                pool.query(customerQuery.addCustomer,[phone, customername ,facilities, broadcast , clubid],(error,result)=>{
            if (error){
                res.json(error);
            } else {
                res.json({message:"Successfully Added  customers Data",
                status:200})
            }
        }) 
            }
        }

       
    })
}

module.exports ={getAllCustomers,addCustomer}
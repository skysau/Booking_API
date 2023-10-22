const pool = require('../db');
const customerQuery = require('./quaries')

const getAllCustomers = (req, res) => {
    pool.query(customerQuery.getAllCustomer, (error, result) => {
        if (error) {
            res.json(error);
        } else {
            res.status(200).json({
                message: "Successfully fetched customers Data",
                status: 200
                , data: result.rows
            })
        }
    })
}

const addCustomer = (req, res) => {
    const { phone, customername, facilities, broadcast, clubid } = req.body;
    pool.query(customerQuery.checkCustomer, [phone, clubid], (error, result) => {
        if (result.rows.length) {
            res.json("phone number alredy exist");
        } else {
            if (error) {
                res.json(error)
            } else {
                pool.query(customerQuery.addCustomer, [phone, customername, facilities, broadcast, clubid], (error, result) => {
                    if (error) {
                        res.json(error);
                    } else {
                        res.json({
                            message: "Successfully Added  customers Data",
                            status: 200, data: result.rows
                        })
                    }
                })
            }
        }


    })
}
const updateCustomerById = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const { phone, clubid } = req.body;
    const { quarirs, bodyData } = customerQuery.updateQuery(body);
    bodyData.push(id);
    pool.query(customerQuery.checkCustomer, [phone, clubid], (error, result) => {
        if (result.rows.length) {
            res.json("phone number alredy exist");
        } else {
            if (error) {
                res.json(error)
            } else {
                pool.query(quarirs, bodyData, (error, result) => {
                    if (error) {
                        res.json(error);
                    } else {
                        res.status(200).json({
                            message: "Successfully Updated Booking Data  by CustomersId",
                            status: 200
                            , data: result.rows
                        })

                    }
                })
            }
        }


    })

}

const getAllDataCustomer = (req,res)=>{
    pool.query(customerQuery.getListCustomer, (error, result) => {
        if (error) {
            res.json(error);
        } else {
            res.status(200).json({
                message: "Successfully fetched All customers Data",
                status: 200
                , data: result.rows
            })
        }
    })
}

module.exports = { getAllCustomers, addCustomer, updateCustomerById ,getAllDataCustomer}
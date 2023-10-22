const pool = require('../db');
const singleTableCustomerQuery = require('./singleTable.quaries')

const getAllCustomers = (req, res) => {
    pool.query(singleTableCustomerQuery.getAllCustomer, (error, result) => {
        if (error) {
            res.json(error);
        } else {
            result.rows.forEach(ele => {
                let item = ele.booking;
                delete ele["booking"];
                ele["booking"] = []
                item.forEach(data =>
                    ele["booking"].push(JSON.parse(data))
                )
            })
            res.status(200).json({
                message: "Successfully fetched customers Data from single table",
                status: 200
                , data: result.rows
            })
        }
    })
}

const getBookingByCustomersId = (req, res) => {
    const id = req.params.id;
    const body = req.body.customer;
    pool.query(singleTableCustomerQuery.getBookingByCustomersId, [id], (error, result) => {
        if (error) {
            res.json(error);
        } else {
            result.rows.forEach(ele => {
                let item = ele.booking;
                delete ele["booking"];
                ele["booking"] = []
                item.forEach(data =>
                    ele["booking"].push(JSON.parse(data))
                )
            })
            if (body) {
                res.status(200).json({
                    message: "Successfully fetched Booking Data from single table by CustomersId",
                    status: 200
                    , data: result.rows
                })
            } else {
                res.status(200).json({
                    message: "Successfully fetched Booking Data from single table by CustomersId",
                    status: 200
                    , data: result.rows[0].booking
                })
            }

        }
    })
}

const addCustomer = (req, res) => {
    const { phone, customername, facilities, broadcast, clubid, booking } = req.body;
    pool.query(singleTableCustomerQuery.checkCustomer, [phone, clubid], (error, result) => {
        if (result.rows.length) {
            res.json("phone number alredy exist");
        } else {
            if (error) {
                res.json(error)
            } else {
                pool.query(singleTableCustomerQuery.addCustomer, [phone, customername, facilities, broadcast, clubid, booking], (error, result) => {
                    if (error) {
                        res.json(error);
                        throw error;
                    } else {
                        res.json({
                            message: "Successfully Added  customers Data from single table",
                            status: 200
                        })
                    }
                })
            }
        }


    })
}
const updateSigleTableCustomer = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const {phone, clubid}=req.body;
    const { quarirs, bodyData } = singleTableCustomerQuery.updateQuery(body);
    bodyData.push(id);
    pool.query(singleTableCustomerQuery.checkCustomer, [phone, clubid], (error, result) => {
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
            result.rows.forEach(ele => {
                let item = ele.booking;
                delete ele["booking"];
                ele["booking"] = []
                item.forEach(data =>
                    ele["booking"].push(JSON.parse(data))
                )
            })
            res.status(200).json({
                message: "Successfully Updated Booking Data from single table by CustomersId",
                status: 200
                , data: result.rows
            })

        }
    })
            }
        }


    })
    
}

const getAllCustomersList= (req, res) => {
    pool.query(singleTableCustomerQuery.getAllCustomer, (error, result) => {
        if (error) {
            res.json(error);
        } else {
            result.rows.forEach(ele => {
                let item = ele.booking;
                ele["total_bill"]= item.reduce((accumulator, currentValue) => (accumulator + JSON.parse(currentValue).bill), 0);
                ele["booking_count"] = item.length;

                delete ele["booking"];
            });

            res.status(200).json({
                message: "Successfully fetched customers list from single table",
                status: 200
                , data: result.rows
            })
        }
    })
}
module.exports = { getAllCustomers, addCustomer, getBookingByCustomersId, updateSigleTableCustomer,getAllCustomersList }
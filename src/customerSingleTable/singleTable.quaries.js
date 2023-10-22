const { query } = require("express");

const getAllCustomer = "SELECT * FROM customerdetails";
const getBookingByCustomersId = "SELECT * FROM customerdetails WHERE id = $1"
const checkCustomer = "SELECT * FROM customerdetails WHERE phone = $1 AND clubid = $2";
const addCustomer = "INSERT INTO customerdetails (phone, customername ,facilities, broadcast , clubid, booking) VALUES ($1, $2, $3, $4, $5, $6)";
const updateQuery = (item) => {
    let body = { quarirs: "UPDATE customerdetails SET ", bodyData: [] }
    Object.keys(item).forEach((key, index) => {
        body.quarirs += index != Object.keys(item).length - 1 ? `${key} = $${index + 1}, ` : `${key} = $${index + 1}`;
        body.bodyData.push(item[key])
    })
    body.quarirs += ` WHERE id = $${Object.keys(item).length + 1}  RETURNING *`;
    return body;
}




module.exports = {
    getAllCustomer, checkCustomer, addCustomer, getBookingByCustomersId, updateQuery
}
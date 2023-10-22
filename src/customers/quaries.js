const getAllCustomer="SELECT * FROM customer";
const checkCustomer="SELECT * FROM customer WHERE phone = $1 AND clubid = $2";
const addCustomer="INSERT INTO customer (phone, customername ,facilities, broadcast , clubid) VALUES ($1, $2, $3, $4, $5)";



module.exports = {
    getAllCustomer,checkCustomer,addCustomer
}
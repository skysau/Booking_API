const getAllCustomer="SELECT * FROM customerdetails";
const getBookingByCustomersId="SELECT * FROM customerdetails WHERE id = $1"
const checkCustomer="SELECT * FROM customerdetails WHERE phone = $1 AND clubid = $2";
const addCustomer="INSERT INTO customerdetails (phone, customername ,facilities, broadcast , clubid, booking) VALUES ($1, $2, $3, $4, $5, $6)";



module.exports = {
    getAllCustomer,checkCustomer,addCustomer,getBookingByCustomersId
}